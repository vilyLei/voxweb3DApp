
interface Color4 {
    r: number;
    g: number;
    b: number;
    a: number;
    setRGB3Bytes(r:number,g:number,b:number):void;
    setRGB3f(r:number,g:number,b:number):void;
    setRGBUint24(rgbUint24:number):void;
    setRGBA4f(r:number,g:number,b:number,a:number):void;
    copyFrom(c:Color4):void;
    scaleBy(s:number):void;
    inverseRGB():void;
    randomRGB(density:number):void;
    normalizeRandom(density:number):void;
    normalize(density:number):void;
    
    /**
     * @returns for example: rgba(255,255,255,1.0)
     */
    getCSSDecRGBAColor(): string;
    /**
     * @returns for example: #350b7e
     */
    getCSSHeXRGBColor(): string;
}

export {Color4}