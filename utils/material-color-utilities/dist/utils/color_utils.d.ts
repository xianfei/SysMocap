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
 * Converts a color from RGB components to ARGB format.
 */
export declare function argbFromRgb(red: number, green: number, blue: number): number;
/**
 * Returns the alpha component of a color in ARGB format.
 */
export declare function alphaFromArgb(argb: number): number;
/**
 * Returns the red component of a color in ARGB format.
 */
export declare function redFromArgb(argb: number): number;
/**
 * Returns the green component of a color in ARGB format.
 */
export declare function greenFromArgb(argb: number): number;
/**
 * Returns the blue component of a color in ARGB format.
 */
export declare function blueFromArgb(argb: number): number;
/**
 * Returns whether a color in ARGB format is opaque.
 */
export declare function isOpaque(argb: number): boolean;
/**
 * Converts a color from ARGB to XYZ.
 */
export declare function argbFromXyz(x: number, y: number, z: number): number;
/**
 * Converts a color from XYZ to ARGB.
 */
export declare function xyzFromArgb(argb: number): number[];
/**
 * Converts a color represented in Lab color space into an ARGB
 * integer.
 */
export declare function argbFromLab(l: number, a: number, b: number): number;
/**
 * Converts a color from ARGB representation to L*a*b*
 * representation.
 *
 * @param argb the ARGB representation of a color
 * @return a Lab object representing the color
 */
export declare function labFromArgb(argb: number): number[];
/**
 * Converts an L* value to an ARGB representation.
 *
 * @param lstar L* in L*a*b*
 * @return ARGB representation of grayscale color with lightness
 * matching L*
 */
export declare function argbFromLstar(lstar: number): number;
/**
 * Computes the L* value of a color in ARGB representation.
 *
 * @param argb ARGB representation of a color
 * @return L*, from L*a*b*, coordinate of the color
 */
export declare function lstarFromArgb(argb: number): number;
/**
 * Converts an L* value to a Y value.
 *
 * L* in L*a*b* and Y in XYZ measure the same quantity, luminance.
 *
 * L* measures perceptual luminance, a linear scale. Y in XYZ
 * measures relative luminance, a logarithmic scale.
 *
 * @param lstar L* in L*a*b*
 * @return Y in XYZ
 */
export declare function yFromLstar(lstar: number): number;
/**
 * Linearizes an RGB component.
 *
 * @param rgbComponent 0 <= rgb_component <= 255, represents R/G/B
 * channel
 * @return 0.0 <= output <= 100.0, color channel converted to
 * linear RGB space
 */
export declare function linearized(rgbComponent: number): number;
/**
 * Delinearizes an RGB component.
 *
 * @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
 * linear R/G/B channel
 * @return 0 <= output <= 255, color channel converted to regular
 * RGB space
 */
export declare function delinearized(rgbComponent: number): number;
/**
 * Returns the standard white point; white on a sunny day.
 *
 * @return The white point
 */
export declare function whitePointD65(): number[];
