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
import { Cam16 } from './cam16.js';
import { Hct } from './hct.js';
import { ViewingConditions } from './viewing_conditions.js';
const RED = 0xffff0000;
const GREEN = 0xff00ff00;
const BLUE = 0xff0000ff;
const WHITE = 0xffffffff;
const BLACK = 0xff000000;
describe('CAM to ARGB', () => {
    it('red', () => {
        const cam = Cam16.fromInt(RED);
        expect(cam.hue).toBeCloseTo(27.408, 0.001);
        expect(cam.chroma).toBeCloseTo(113.357, 0.001);
        expect(cam.j).toBeCloseTo(46.445, 0.001);
        expect(cam.m).toBeCloseTo(89.494, 0.001);
        expect(cam.s).toBeCloseTo(91.889, 0.001);
        expect(cam.q).toBeCloseTo(105.988, 0.001);
    });
    it('green', () => {
        const cam = Cam16.fromInt(GREEN);
        expect(cam.hue).toBeCloseTo(142.139, 0.001);
        expect(cam.chroma).toBeCloseTo(108.410, 0.001);
        expect(cam.j).toBeCloseTo(79.331, 0.001);
        expect(cam.m).toBeCloseTo(85.587, 0.001);
        expect(cam.s).toBeCloseTo(78.604, 0.001);
        expect(cam.q).toBeCloseTo(138.520, 0.001);
    });
    it('blue', () => {
        const cam = Cam16.fromInt(BLUE);
        expect(cam.hue).toBeCloseTo(282.788, 0.001);
        expect(cam.chroma).toBeCloseTo(87.230, 0.001);
        expect(cam.j).toBeCloseTo(25.465, 0.001);
        expect(cam.m).toBeCloseTo(68.867, 0.001);
        expect(cam.s).toBeCloseTo(93.674, 0.001);
        expect(cam.q).toBeCloseTo(78.481, 0.001);
    });
    it('white', () => {
        const cam = Cam16.fromInt(WHITE);
        expect(cam.hue).toBeCloseTo(209.492, 0.001);
        expect(cam.chroma).toBeCloseTo(2.869, 0.001);
        expect(cam.j).toBeCloseTo(100.0, 0.001);
        expect(cam.m).toBeCloseTo(2.265, 0.001);
        expect(cam.s).toBeCloseTo(12.068, 0.001);
        expect(cam.q).toBeCloseTo(155.521, 0.001);
    });
    it('black', () => {
        const cam = Cam16.fromInt(BLACK);
        expect(cam.hue).toBeCloseTo(0.0, 0.001);
        expect(cam.chroma).toBeCloseTo(0.0, 0.001);
        expect(cam.j).toBeCloseTo(0.0, 0.001);
        expect(cam.m).toBeCloseTo(0.0, 0.001);
        expect(cam.s).toBeCloseTo(0.0, 0.001);
        expect(cam.q).toBeCloseTo(0.0, 0.001);
    });
});
describe('CAM to ARGB to CAM', () => {
    it('red', () => {
        const cam = Cam16.fromInt(RED);
        const argb = cam.toInt();
        expect(argb).toEqual(RED);
    });
    it('green', () => {
        const cam = Cam16.fromInt(GREEN);
        const argb = cam.toInt();
        expect(argb).toEqual(GREEN);
    });
    it('blue', () => {
        const cam = Cam16.fromInt(BLUE);
        const argb = cam.toInt();
        expect(argb).toEqual(BLUE);
    });
});
describe('ARGB to HCT', () => {
    it('green', () => {
        const hct = Hct.fromInt(GREEN);
        expect(hct.hue).toBeCloseTo(142.139, 2);
        expect(hct.chroma).toBeCloseTo(108.410, 2);
        expect(hct.tone).toBeCloseTo(87.737, 2);
    });
    it('blue', () => {
        const hct = Hct.fromInt(BLUE);
        expect(hct.hue).toBeCloseTo(282.788, 2);
        expect(hct.chroma).toBeCloseTo(87.230, 2);
        expect(hct.tone).toBeCloseTo(32.302, 2);
    });
    it('blue tone 90', () => {
        const hct = Hct.from(282.788, 87.230, 90.0);
        expect(hct.hue).toBeCloseTo(280.729, 2);
        expect(hct.chroma).toBeCloseTo(19.247, 2);
        expect(hct.tone).toBeCloseTo(89.961, 2);
    });
});
describe('viewing conditions', () => {
    it('default', () => {
        const vc = ViewingConditions.DEFAULT;
        expect(vc.n).toBeCloseTo(0.184, 0.001);
        expect(vc.aw).toBeCloseTo(29.980, 0.001);
        expect(vc.nbb).toBeCloseTo(1.016, 0.001);
        expect(vc.ncb).toBeCloseTo(1.016, 0.001);
        expect(vc.c).toBeCloseTo(0.69, 0.001);
        expect(vc.nc).toBeCloseTo(1.0, 0.001);
        expect(vc.rgbD[0]).toBeCloseTo(1.021, 0.001);
        expect(vc.rgbD[1]).toBeCloseTo(0.986, 0.001);
        expect(vc.rgbD[2]).toBeCloseTo(0.933, 0.001);
        expect(vc.fl).toBeCloseTo(0.388, 0.001);
        expect(vc.fLRoot).toBeCloseTo(0.789, 0.001);
        expect(vc.z).toBeCloseTo(1.909, 0.001);
    });
});
//# sourceMappingURL=hct_test.js.map