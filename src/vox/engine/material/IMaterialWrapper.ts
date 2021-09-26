import { TextureProxy } from "../texture/TextureProxy";
import {ShdCodeMaterial} from "./ShdCodeMaterial";

interface IMaterialWrapper {

    initializeByCodeBuf(texEnabled:boolean):void;
    setTextureList(texList: TextureProxy[]): void
    getMaterial(): ShdCodeMaterial;
    getBufSortFormat(): number;
}
export {IMaterialWrapper};