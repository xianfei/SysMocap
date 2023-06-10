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
import { TonalPalette } from '../palettes/tonal_palette.js';
import { Scheme } from '../scheme/scheme.js';
/**
 * Custom color used to pair with a theme
 */
export interface CustomColor {
    value: number;
    name: string;
    blend: boolean;
}
/**
 * Color group
 */
export interface ColorGroup {
    color: number;
    onColor: number;
    colorContainer: number;
    onColorContainer: number;
}
/**
 * Custom Color Group
 */
export interface CustomColorGroup {
    color: CustomColor;
    value: number;
    light: ColorGroup;
    dark: ColorGroup;
}
/**
 * Theme
 */
export interface Theme {
    source: number;
    schemes: {
        light: Scheme;
        dark: Scheme;
    };
    palettes: {
        primary: TonalPalette;
        secondary: TonalPalette;
        tertiary: TonalPalette;
        neutral: TonalPalette;
        neutralVariant: TonalPalette;
        error: TonalPalette;
    };
    customColors: CustomColorGroup[];
}
/**
 * Generate a theme from a source color
 *
 * @param source Source color
 * @param customColors Array of custom colors
 * @return Theme object
 */
export declare function themeFromSourceColor(source: number, customColors?: CustomColor[]): Theme;
/**
 * Generate a theme from an image source
 *
 * @param image Image element
 * @param customColors Array of custom colors
 * @return Theme object
 */
export declare function themeFromImage(image: HTMLImageElement, customColors?: CustomColor[]): Promise<Theme>;
/**
 * Generate custom color group from source and target color
 *
 * @param source Source color
 * @param color Custom color
 * @return Custom color group
 *
 * @link https://m3.material.io/styles/color/the-color-system/color-roles
 */
export declare function customColor(source: number, color: CustomColor): CustomColorGroup;
/**
 * Apply a theme to an element
 *
 * @param theme Theme object
 * @param options Options
 */
export declare function applyTheme(theme: Theme, options?: {
    dark?: boolean;
    target?: HTMLElement;
}): void;
