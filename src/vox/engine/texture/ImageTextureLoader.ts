/***************************************************************************/
/*                                                                         */
/*  Copyright 2018-2022 by                                                 */
/*  Vily(vily313@126.com)                                                  */
/*                                                                         */
/***************************************************************************/

import { TextureProxy } from "../texture/TextureProxy";
import { ImageTextureProxy } from "../texture/ImageTextureProxy";
import { BytesTextureProxy } from "../texture/BytesTextureProxy";
import { ImageCubeTextureProxy } from "../texture/ImageCubeTextureProxy";

interface ImageTextureLoader {

    getTexByUrl(purl: string, wrapRepeat: boolean, mipmapEnabled: boolean, powerOf2Fix: boolean): TextureProxy;
    getBytesTexByUrl(purl: string, mipLevel: number): BytesTextureProxy;
    getImageTexByUrl(purl: string, mipLevel: number, offsetTexEnabled: boolean, powerOf2Fix: boolean): ImageTextureProxy

    getCubeTexAndLoadImg(idns: string, purls: string[], mipLevel: number): ImageCubeTextureProxy;
    setRunFlag(flag: number): void;
    getRunFlag(): number;
    isRunning(): boolean;
    isStopped(): boolean;
}
export { ImageTextureLoader };