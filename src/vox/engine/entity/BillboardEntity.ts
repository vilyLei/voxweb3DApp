import { IEntityObject } from "./IEntityObject";
import { TextureProxy } from "../texture/TextureProxy";

interface BillboardEntity extends IEntityObject {

    setRGB3f(pr: number, pg: number, pb: number): void;
    setRGBOffset3f(pr: number, pg: number, pb: number): void;
    setFadeFactor(pa:number):void;
    getFadeFactor():number;
    getRotationZ():number;
    setRotationZ(degrees:number):void;
    getScaleX():number;
    getScaleY():number;
    setScaleX(p:number):void;
    setScaleY(p:number):void;
    setScaleXY(sx:number,sy:number):void;

    toTransparentBlend(always:boolean):void;
    toBrightnessBlend(always:boolean):void;
    initializeSquare(size:number,texList:TextureProxy[]):void;
    initialize(bw:number, bh:number,texList:TextureProxy[]):void;
    setUV(pu:number,pv:number,du:number,dv:number):void;
}

export { BillboardEntity }