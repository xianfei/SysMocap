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
import 'jasmine.js';
import { Score } from './score.js';
describe('scoring', () => {
    it('prioritizes chroma when proportions equal', () => {
        const colorsToPopulation = new Map();
        colorsToPopulation.set(0xffff0000, 1);
        colorsToPopulation.set(0xff00ff00, 1);
        colorsToPopulation.set(0xff0000ff, 1);
        const ranked = Score.score(colorsToPopulation);
        expect(ranked[0]).toBe(0xffff0000);
        expect(ranked[1]).toBe(0xff00ff00);
        expect(ranked[2]).toBe(0xff0000ff);
    });
    it('generates gBlue when no colors available', () => {
        const colorsToPopulation = new Map();
        colorsToPopulation.set(0xff000000, 1);
        const ranked = Score.score(colorsToPopulation);
        expect(ranked[0]).toBe(0xff4285F4);
    });
    it('dedupes nearby hues', () => {
        const colorsToPopulation = new Map();
        colorsToPopulation.set(0xff008772, 1);
        colorsToPopulation.set(0xff318477, 1);
        const ranked = Score.score(colorsToPopulation);
        expect(ranked.length).toBe(1);
        expect(ranked[0]).toBe(0xff008772);
    });
});
//# sourceMappingURL=score_test.js.map