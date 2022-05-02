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
import { QuantizerCelebi } from './quantizer_celebi.js';
const RED = 0xffff0000;
const GREEN = 0xff00ff00;
const BLUE = 0xff0000ff;
describe('QuantizerCelebi', () => {
    it('1R', () => {
        const answer = QuantizerCelebi.quantize([RED], 128);
        expect(answer.size).toBe(1);
        expect(answer.get(RED)).toBe(1);
    });
    it('1G', () => {
        const answer = QuantizerCelebi.quantize([GREEN], 128);
        expect(answer.size).toBe(1);
        expect(answer.get(GREEN)).toBe(1);
    });
    it('1B', () => {
        const answer = QuantizerCelebi.quantize([BLUE], 128);
        expect(answer.size).toBe(1);
        expect(answer.get(BLUE)).toBe(1);
    });
    it('5B', () => {
        const answer = QuantizerCelebi.quantize([BLUE, BLUE, BLUE, BLUE, BLUE], 128);
        expect(answer.size).toBe(1);
        expect(answer.get(BLUE)).toBe(5);
    });
    it('2R 3G', () => {
        const answer = QuantizerCelebi.quantize([RED, RED, GREEN, GREEN, GREEN], 128);
        expect(answer.size).toBe(2);
        expect(answer.get(RED)).toBe(2);
        expect(answer.get(GREEN)).toBe(3);
    });
    it('1R 1G 1B', () => {
        const answer = QuantizerCelebi.quantize([RED, GREEN, BLUE], 128);
        expect(answer.size).toBe(3);
        expect(answer.get(RED)).toBe(1);
        expect(answer.get(GREEN)).toBe(1);
        expect(answer.get(BLUE)).toBe(1);
    });
});
//# sourceMappingURL=quantizer_celebi_test.js.map