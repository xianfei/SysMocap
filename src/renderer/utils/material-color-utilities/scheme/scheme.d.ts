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
 * Represents a Material color scheme, a mapping of color roles to colors.
 */
export declare class Scheme {
    private readonly props;
    get primary(): number;
    get primaryContainer(): number;
    get onPrimary(): number;
    get onPrimaryContainer(): number;
    get secondary(): number;
    get secondaryContainer(): number;
    get onSecondary(): number;
    get onSecondaryContainer(): number;
    get tertiary(): number;
    get onTertiary(): number;
    get tertiaryContainer(): number;
    get onTertiaryContainer(): number;
    get error(): number;
    get onError(): number;
    get errorContainer(): number;
    get onErrorContainer(): number;
    get background(): number;
    get onBackground(): number;
    get surface(): number;
    get onSurface(): number;
    get surfaceVariant(): number;
    get onSurfaceVariant(): number;
    get outline(): number;
    get shadow(): number;
    get inverseSurface(): number;
    get inverseOnSurface(): number;
    get inversePrimary(): number;
    /**
     * @param argb ARGB representation of a color.
     * @return Light Material color scheme, based on the color's hue.
     */
    static light(argb: number): Scheme;
    /**
     * @param argb ARGB representation of a color.
     * @return Dark Material color scheme, based on the color's hue.
     */
    static dark(argb: number): Scheme;
    private constructor();
    toJSON(): {
        primary: number;
        primaryContainer: number;
        onPrimary: number;
        onPrimaryContainer: number;
        secondary: number;
        secondaryContainer: number;
        onSecondary: number;
        onSecondaryContainer: number;
        tertiary: number;
        tertiaryContainer: number;
        onTertiary: number;
        onTertiaryContainer: number;
        error: number;
        errorContainer: number;
        onError: number;
        onErrorContainer: number;
        background: number;
        onBackground: number;
        surface: number;
        onSurface: number;
        surfaceVariant: number;
        onSurfaceVariant: number;
        outline: number;
        shadow: number;
        inverseSurface: number;
        inverseOnSurface: number;
        inversePrimary: number;
    };
}
