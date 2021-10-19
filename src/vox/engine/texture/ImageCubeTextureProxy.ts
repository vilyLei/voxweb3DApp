/***************************************************************************/
/*                                                                         */
/*  Copyright 2018-2022 by                                                 */
/*  Vily(vily313@126.com)                                                  */
/*                                                                         */
/***************************************************************************/
import { TextureProxy } from "../texture/TextureProxy";
interface ImageCubeTextureProxy extends TextureProxy {
    setDataFromImageToFaceAt(index: number, img: any, miplevel: number): void
}
export {ImageCubeTextureProxy};