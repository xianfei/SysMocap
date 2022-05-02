/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Cam16 } from '../hct/cam16.js';
import * as utils from '../utils/color_utils.js';
import * as math from '../utils/math_utils.js';
/**
 *  Given a large set of colors, remove colors that are unsuitable for a UI
 *  theme, and rank the rest based on suitability.
 *
 *  Enables use of a high cluster count for image quantization, thus ensuring
 *  colors aren't muddied, while curating the high cluster count to a much
 *  smaller number of appropriate choices.
 */
export class Score {
    constructor() { }
    /**
     * Given a map with keys of colors and values of how often the color appears,
     * rank the colors based on suitability for being used for a UI theme.
     *
     * @param colorsToPopulation map with keys of colors and values of how often
     *     the color appears, usually from a source image.
     * @return Colors sorted by suitability for a UI theme. The most suitable
     *     color is the first item, the least suitable is the last. There will
     *     always be at least one color returned. If all the input colors
     *     were not suitable for a theme, a default fallback color will be
     *     provided, Google Blue.
     */
    static score(colorsToPopulation) {
        // Determine the total count of all colors.
        let populationSum = 0;
        for (const population of colorsToPopulation.values()) {
            populationSum += population;
        }
        // Turn the count of each color into a proportion by dividing by the total
        // count. Also, fill a cache of CAM16 colors representing each color, and
        // record the proportion of colors for each CAM16 hue.
        const colorsToProportion = new Map();
        const colorsToCam = new Map();
        const hueProportions = new Array(360).fill(0);
        for (const [color, population] of colorsToPopulation.entries()) {
            const proportion = population / populationSum;
            colorsToProportion.set(color, proportion);
            const cam = Cam16.fromInt(color);
            colorsToCam.set(color, cam);
            const hue = Math.round(cam.hue);
            hueProportions[hue] += proportion;
        }
        // Determine the proportion of the colors around each color, by summing the
        // proportions around each color's hue.
        const colorsToExcitedProportion = new Map();
        for (const [color, cam] of colorsToCam.entries()) {
            const hue = Math.round(cam.hue);
            let excitedProportion = 0;
            for (let i = (hue - 15); i < (hue + 15); i++) {
                const neighborHue = math.sanitizeDegreesInt(i);
                excitedProportion += hueProportions[neighborHue];
            }
            colorsToExcitedProportion.set(color, excitedProportion);
        }
        // Score the colors by their proportion, as well as how chromatic they are.
        const colorsToScore = new Map();
        for (const [color, cam] of colorsToCam.entries()) {
            const proportion = colorsToExcitedProportion.get(color);
            const proportionScore = proportion * 100.0 * Score.WEIGHT_PROPORTION;
            const chromaWeight = cam.chroma < Score.TARGET_CHROMA ?
                Score.WEIGHT_CHROMA_BELOW :
                Score.WEIGHT_CHROMA_ABOVE;
            const chromaScore = (cam.chroma - Score.TARGET_CHROMA) * chromaWeight;
            const score = proportionScore + chromaScore;
            colorsToScore.set(color, score);
        }
        // Remove colors that are unsuitable, ex. very dark or unchromatic colors.
        // Also, remove colors that are very similar in hue.
        const filteredColors = Score.filter(colorsToExcitedProportion, colorsToCam);
        const dedupedColorsToScore = new Map();
        for (const color of filteredColors) {
            let duplicateHue = false;
            const hue = colorsToCam.get(color).hue;
            for (const [alreadyChosenColor,] of dedupedColorsToScore) {
                const alreadyChosenHue = colorsToCam.get(alreadyChosenColor).hue;
                if (math.differenceDegrees(hue, alreadyChosenHue) < 15) {
                    duplicateHue = true;
                    break;
                }
            }
            if (duplicateHue) {
                continue;
            }
            dedupedColorsToScore.set(color, colorsToScore.get(color));
        }
        // Ensure the list of colors returned is sorted such that the first in the
        // list is the most suitable, and the last is the least suitable.
        const colorsByScoreDescending = Array.from(dedupedColorsToScore.entries());
        colorsByScoreDescending.sort((first, second) => {
            return second[1] - first[1];
        });
        const answer = colorsByScoreDescending.map((entry) => {
            return entry[0];
        });
        // Ensure that at least one color is returned.
        if (answer.length === 0) {
            answer.push(0xff4285F4); // Google Blue
        }
        return answer;
    }
    static filter(colorsToExcitedProportion, colorsToCam) {
        const filtered = new Array();
        for (const [color, cam] of colorsToCam.entries()) {
            const proportion = colorsToExcitedProportion.get(color);
            if (cam.chroma >= Score.CUTOFF_CHROMA &&
                utils.lstarFromArgb(color) >= Score.CUTOFF_TONE &&
                proportion >= Score.CUTOFF_EXCITED_PROPORTION) {
                filtered.push(color);
            }
        }
        return filtered;
    }
}
Score.TARGET_CHROMA = 48.0;
Score.WEIGHT_PROPORTION = 0.7;
Score.WEIGHT_CHROMA_ABOVE = 0.3;
Score.WEIGHT_CHROMA_BELOW = 0.1;
Score.CUTOFF_CHROMA = 15.0;
Score.CUTOFF_TONE = 10.0;
Score.CUTOFF_EXCITED_PROPORTION = 0.01;
//# sourceMappingURL=score.js.map