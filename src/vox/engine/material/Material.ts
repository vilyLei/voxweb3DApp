
import { TextureProxy } from "../texture/TextureProxy";
import {ShaderUniformData} from "./ShaderUniformData";

interface Material {
    
    getAttachCount():number;
    hasTexture():boolean;
    getBufSortFormat():number;
    getShdUniqueName():string;
    initializeByCodeBuf(texEnabled:boolean):void;
    setTextureList(texList: TextureProxy[]): void;
    setTextureAt(index: number, tex: TextureProxy): void;
    getTextureList(): TextureProxy[];
    getTextureAt(index: number): TextureProxy;
    getTextureTotal(): number;
    getShdTexTotal(): number;
    texDataEnabled(): boolean;
    setSelfUniformData(uniformData: ShaderUniformData): void;
    setSharedUniformsData(uniformDataList: ShaderUniformData[]): void;
}
export { Material };