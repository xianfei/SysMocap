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
 * An image quantizer that divides the image's pixels into clusters by
 * recursively cutting an RGB cube, based on the weight of pixels in each area
 * of the cube.
 *
 * The algorithm was described by Xiaolin Wu in Graphic Gems II, published in
 * 1991.
 */
export declare class QuantizerWu {
    private weights;
    private momentsR;
    private momentsG;
    private momentsB;
    private moments;
    private cubes;
    constructor(weights?: number[], momentsR?: number[], momentsG?: number[], momentsB?: number[], moments?: number[], cubes?: Box[]);
    /**
     * @param pixels Colors in ARGB format.
     * @param maxColors The number of colors to divide the image into. A lower
     *     number of colors may be returned.
     * @return Colors in ARGB format.
     */
    quantize(pixels: number[], maxColors: number): number[];
    private constructHistogram;
    private computeMoments;
    private createBoxes;
    private createResult;
    private variance;
    private cut;
    private maximize;
    private volume;
    private bottom;
    private top;
    private getIndex;
}
/**
 * Keeps track of the state of each box created as the Wu  quantization
 * algorithm progresses through dividing the image's pixels as plotted in RGB.
 */
declare class Box {
    r0: number;
    r1: number;
    g0: number;
    g1: number;
    b0: number;
    b1: number;
    vol: number;
    constructor(r0?: number, r1?: number, g0?: number, g1?: number, b0?: number, b1?: number, vol?: number);
}
export {};
