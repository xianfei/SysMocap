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
 * Utility methods for mathematical operations.
 */
/**
 * The signum function.
 *
 * @return 1 if num > 0, -1 if num < 0, and 0 if num = 0
 */
export declare function signum(num: number): number;
/**
 * The linear interpolation function.
 *
 * @return start if amount = 0 and stop if amount = 1
 */
export declare function lerp(start: number, stop: number, amount: number): number;
/**
 * Clamps an integer between two integers.
 *
 * @return input when min <= input <= max, and either min or max
 * otherwise.
 */
export declare function clampInt(min: number, max: number, input: number): number;
/**
 * Clamps an integer between two floating-point numbers.
 *
 * @return input when min <= input <= max, and either min or max
 * otherwise.
 */
export declare function clampDouble(min: number, max: number, input: number): number;
/**
 * Sanitizes a degree measure as an integer.
 *
 * @return a degree measure between 0 (inclusive) and 360
 * (exclusive).
 */
export declare function sanitizeDegreesInt(degrees: number): number;
/**
 * Sanitizes a degree measure as a floating-point number.
 *
 * @return a degree measure between 0.0 (inclusive) and 360.0
 * (exclusive).
 */
export declare function sanitizeDegreesDouble(degrees: number): number;
/**
 * Distance of two points on a circle, represented using degrees.
 */
export declare function differenceDegrees(a: number, b: number): number;
/**
 * Multiplies a 1x3 row vector with a 3x3 matrix.
 */
export declare function matrixMultiply(row: number[], matrix: number[][]): number[];
