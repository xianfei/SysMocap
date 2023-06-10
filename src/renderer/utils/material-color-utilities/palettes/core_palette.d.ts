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
import { TonalPalette } from './tonal_palette.js';
/**
 * An intermediate concept between the key color for a UI theme, and a full
 * color scheme. 5 sets of tones are generated, all except one use the same hue
 * as the key color, and all vary in chroma.
 */
export declare class CorePalette {
    a1: TonalPalette;
    a2: TonalPalette;
    a3: TonalPalette;
    n1: TonalPalette;
    n2: TonalPalette;
    error: TonalPalette;
    /**
     * @param argb ARGB representation of a color
     */
    static of(argb: number): CorePalette;
    private constructor();
}
