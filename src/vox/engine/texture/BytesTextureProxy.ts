/***************************************************************************/
/*                                                                         */
/*  Copyright 2018-2022 by                                                 */
/*  Vily(vily313@126.com)                                                  */
/*                                                                         */
/***************************************************************************/
import { TextureProxy } from "../texture/TextureProxy";

interface BytesTextureProxy extends TextureProxy {

    toAlphaFormat(): void;
    toRedFormat(): void;
    toRGBFormat(): void;
    toRGBAFormat(): void;
    setDataFromBytes(bytes: Uint8Array, miplevel: number, imgWidth: number, imgHeight: number, offsetx: number, offsety: number, rebuild: boolean): void;
    setPartDataFromeBytes(bytes: Uint8Array, px: number, py: number, twidth: number, theight: number, miplevel: number): void;
    getPixels(px: number, py: number, pw: number, ph: number, outBytes: Uint8Array): void;
}
export {BytesTextureProxy};