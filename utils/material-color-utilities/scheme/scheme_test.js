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
import { customMatchers } from '../utils/test_utils.js';
import { Scheme } from './scheme.js';
import { SchemeAndroid } from './scheme_android.js';
beforeEach(() => {
    jasmine.addMatchers(customMatchers);
});
describe('scheme', () => {
    it('blue light scheme', () => {
        const scheme = Scheme.light(0xff0000ff);
        expect(scheme.primary).matchesColor(0xff333CFF);
    });
    it('blue dark scheme', () => {
        const scheme = Scheme.dark(0xff0000ff);
        expect(scheme.primary).matchesColor(0xffBDC2FF);
    });
    it('3rd party light scheme', () => {
        const scheme = Scheme.light(0xff6750A4);
        expect(scheme.primary).matchesColor(0xff6750A4);
        expect(scheme.secondary).matchesColor(0xff625B71);
        expect(scheme.tertiary).matchesColor(0xff7D5260);
        expect(scheme.surface).matchesColor(0xfffffbfe);
        expect(scheme.onSurface).matchesColor(0xff1c1b1e);
    });
    it('3rd party dark scheme', () => {
        const scheme = Scheme.dark(0xff6750A4);
        expect(scheme.primary).matchesColor(0xffd0bcff);
        expect(scheme.secondary).matchesColor(0xffcbc2db);
        expect(scheme.tertiary).matchesColor(0xffefb8c8);
        expect(scheme.surface).matchesColor(0xff1c1b1e);
        expect(scheme.onSurface).matchesColor(0xffe6e1e5);
    });
});
describe('android scheme', () => {
    it('blue light scheme', () => {
        const scheme = SchemeAndroid.light(0xff0000ff);
        expect(scheme.colorAccentPrimary).matchesColor(0xffdfe0ff);
    });
    it('blue dark scheme', () => {
        const scheme = SchemeAndroid.dark(0xff0000ff);
        expect(scheme.colorAccentPrimary).matchesColor(0xffdfe0ff);
    });
    it('3rd party light scheme', () => {
        const scheme = SchemeAndroid.light(0xff6750A4);
        expect(scheme.colorAccentPrimary).matchesColor(0xffeaddff);
        expect(scheme.colorAccentSecondary).matchesColor(0xffe8def8);
        expect(scheme.colorAccentTertiary).matchesColor(0xffffd8e4);
        expect(scheme.colorSurface).matchesColor(0xfffdf8fc);
        expect(scheme.textColorPrimary).matchesColor(0xff1c1b1e);
    });
    it('3rd party dark scheme', () => {
        const scheme = SchemeAndroid.dark(0xff6750A4);
        expect(scheme.colorAccentPrimary).matchesColor(0xffeaddff);
        expect(scheme.colorAccentSecondary).matchesColor(0xffe8def8);
        expect(scheme.colorAccentTertiary).matchesColor(0xffffd8e4);
        expect(scheme.colorSurface).matchesColor(0xff313033);
        expect(scheme.textColorPrimary).matchesColor(0xfff4eff4);
    });
});
//# sourceMappingURL=scheme_test.js.map