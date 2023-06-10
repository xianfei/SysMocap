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
declare global {
    namespace jasmine {
        interface Matchers<T> {
            matchesColor(expected: number): boolean;
        }
    }
}
/**
 * Exports a matcher called `matchesColor` that takes two numbers, and logs
 * the equivalent hex codes on failure.
 *
 * To use, add to your test file:
 *  beforeEach(() => {
 *    jasmine.addMatchers(customMatchers);
 *  });
 *
 * Then it can be used as a standard matcher:
 *  expect(scheme.onSurface).matchesColor(0xff000000);
 */
export declare const customMatchers: jasmine.CustomMatcherFactories;
