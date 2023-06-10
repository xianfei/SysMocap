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
/**
 * A color system built using CAM16 hue and chroma, and L* from
 * L*a*b*.
 *
 * Using L* creates a link between the color system, contrast, and thus
 * accessibility. Contrast ratio depends on relative luminance, or Y in the XYZ
 * color space. L*, or perceptual luminance can be calculated from Y.
 *
 * Unlike Y, L* is linear to human perception, allowing trivial creation of
 * accurate color tones.
 *
 * Unlike contrast ratio, measuring contrast in L* is linear, and simple to
 * calculate. A difference of 40 in HCT tone guarantees a contrast ratio >= 3.0,
 * and a difference of 50 guarantees a contrast ratio >= 4.5.
 */
import * as utils from '../utils/color_utils.js';
import * as math from '../utils/math_utils.js';
import { Cam16 } from './cam16.js';
import { ViewingConditions } from './viewing_conditions.js';
/**
 * HCT, hue, chroma, and tone. A color system that provides a perceptually
 * accurate color measurement system that can also accurately render what colors
 * will appear as in different lighting environments.
 */
export class Hct {
    constructor(internalHue, internalChroma, internalTone) {
        this.internalHue = internalHue;
        this.internalChroma = internalChroma;
        this.internalTone = internalTone;
        this.setInternalState(this.toInt());
    }
    /**
     * @param hue 0 <= hue < 360; invalid values are corrected.
     * @param chroma 0 <= chroma < ?; Informally, colorfulness. The color
     *     returned may be lower than the requested chroma. Chroma has a different
     *     maximum for any given hue and tone.
     * @param tone 0 <= tone <= 100; invalid values are corrected.
     * @return HCT representation of a color in default viewing conditions.
     */
    static from(hue, chroma, tone) {
        return new Hct(hue, chroma, tone);
    }
    /**
     * @param argb ARGB representation of a color.
     * @return HCT representation of a color in default viewing conditions
     */
    static fromInt(argb) {
        const cam = Cam16.fromInt(argb);
        const tone = utils.lstarFromArgb(argb);
        return new Hct(cam.hue, cam.chroma, tone);
    }
    toInt() {
        return getInt(this.internalHue, this.internalChroma, this.internalTone);
    }
    /**
     * A number, in degrees, representing ex. red, orange, yellow, etc.
     * Ranges from 0 <= hue < 360.
     */
    get hue() {
        return this.internalHue;
    }
    /**
     * @param newHue 0 <= newHue < 360; invalid values are corrected.
     * Chroma may decrease because chroma has a different maximum for any given
     * hue and tone.
     */
    set hue(newHue) {
        this.setInternalState(getInt(math.sanitizeDegreesDouble(newHue), this.internalChroma, this.internalTone));
    }
    get chroma() {
        return this.internalChroma;
    }
    /**
     * @param newChroma 0 <= newChroma < ?
     * Chroma may decrease because chroma has a different maximum for any given
     * hue and tone.
     */
    set chroma(newChroma) {
        this.setInternalState(getInt(this.internalHue, newChroma, this.internalTone));
    }
    /** Lightness. Ranges from 0 to 100. */
    get tone() {
        return this.internalTone;
    }
    /**
     * @param newTone 0 <= newTone <= 100; invalid valids are corrected.
     * Chroma may decrease because chroma has a different maximum for any given
     * hue and tone.
     */
    set tone(newTone) {
        this.setInternalState(getInt(this.internalHue, this.internalChroma, newTone));
    }
    setInternalState(argb) {
        const cam = Cam16.fromInt(argb);
        const tone = utils.lstarFromArgb(argb);
        this.internalHue = cam.hue;
        this.internalChroma = cam.chroma;
        this.internalTone = tone;
    }
}
/**
 * When the delta between the floor & ceiling of a binary search for maximum
 * chroma at a hue and tone is less than this, the binary search terminates.
 */
const CHROMA_SEARCH_ENDPOINT = 0.4;
/**
 * The maximum color distance, in CAM16-UCS, between a requested color and the
 * color returned.
 */
const DE_MAX = 1.0;
/** The maximum difference between the requested L* and the L* returned. */
const DL_MAX = 0.2;
/**
 * When the delta between the floor & ceiling of a binary search for J,
 * lightness in CAM16, is less than this, the binary search terminates.
 */
const LIGHTNESS_SEARCH_ENDPOINT = 0.01;
/**
 * @param hue a number, in degrees, representing ex. red, orange, yellow, etc.
 *     Ranges from 0 <= hue < 360.
 * @param chroma Informally, colorfulness. Ranges from 0 to roughly 150.
 *    Like all perceptually accurate color systems, chroma has a different
 *    maximum for any given hue and tone, so the color returned may be lower
 *    than the requested chroma.
 * @param tone Lightness. Ranges from 0 to 100.
 * @return ARGB representation of a color in default viewing conditions
 */
function getInt(hue, chroma, tone) {
    return getIntInViewingConditions(math.sanitizeDegreesDouble(hue), chroma, math.clampDouble(0.0, 100.0, tone), ViewingConditions.DEFAULT);
}
/**
 * @param hue CAM16 hue.
 * @param chroma CAM16 chroma.
 * @param tone L*a*b* lightness.
 * @param viewingConditions Information about the environment where the color
 *     was observed.
 */
function getIntInViewingConditions(hue, chroma, tone, viewingConditions) {
    if (chroma < 1.0 || Math.round(tone) <= 0.0 || Math.round(tone) >= 100.0) {
        return utils.argbFromLstar(tone);
    }
    hue = math.sanitizeDegreesDouble(hue);
    let high = chroma;
    let mid = chroma;
    let low = 0.0;
    let isFirstLoop = true;
    let answer = null;
    while (Math.abs(low - high) >= CHROMA_SEARCH_ENDPOINT) {
        const possibleAnswer = findCamByJ(hue, mid, tone);
        if (isFirstLoop) {
            if (possibleAnswer != null) {
                return possibleAnswer.viewed(viewingConditions);
            }
            else {
                isFirstLoop = false;
                mid = low + (high - low) / 2.0;
                continue;
            }
        }
        if (possibleAnswer === null) {
            high = mid;
        }
        else {
            answer = possibleAnswer;
            low = mid;
        }
        mid = low + (high - low) / 2.0;
    }
    if (answer === null) {
        return utils.argbFromLstar(tone);
    }
    return answer.viewed(viewingConditions);
}
/**
 * @param hue CAM16 hue
 * @param chroma CAM16 chroma
 * @param tone L*a*b* lightness
 * @return CAM16 instance within error tolerance of the provided dimensions,
 *     or null.
 */
function findCamByJ(hue, chroma, tone) {
    let low = 0.0;
    let high = 100.0;
    let mid = 0.0;
    let bestdL = 1000.0;
    let bestdE = 1000.0;
    let bestCam = null;
    while (Math.abs(low - high) > LIGHTNESS_SEARCH_ENDPOINT) {
        mid = low + (high - low) / 2;
        const camBeforeClip = Cam16.fromJch(mid, chroma, hue);
        const clipped = camBeforeClip.toInt();
        const clippedLstar = utils.lstarFromArgb(clipped);
        const dL = Math.abs(tone - clippedLstar);
        if (dL < DL_MAX) {
            const camClipped = Cam16.fromInt(clipped);
            const dE = camClipped.distance(Cam16.fromJch(camClipped.j, camClipped.chroma, hue));
            if (dE <= DE_MAX && dE <= bestdE) {
                bestdL = dL;
                bestdE = dE;
                bestCam = camClipped;
            }
        }
        if (bestdL === 0 && bestdE === 0) {
            break;
        }
        if (clippedLstar < tone) {
            low = mid;
        }
        else {
            high = mid;
        }
    }
    return bestCam;
}
//# sourceMappingURL=hct.js.map