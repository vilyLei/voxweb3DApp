
/***************************************************************************/
/*                                                                         */
/*  Copyright 2018-2022 by                                                 */
/*  Vily(vily313@126.com)                                                  */
/*                                                                         */
/***************************************************************************/
import {IAbstractShader} from "./IAbstractShader";
import {IUniformParam} from "./IUniformParam";
export default interface IShdBuilder {
    
    normalMapEanbled: boolean;
    mapLodEnabled: boolean;
    derivatives: boolean;
    vertMatrixInverseEnabled: boolean;
    fragMatrixInverseEnabled: boolean;
    
    reset(): void;
    useHighPrecious(): void;
    useMediumPrecious(): void;
    useLowPrecious(): void;
    addDefine(name: string, value: string): void;
    addVertLayout(type: string, name: string): void;
    addFragOutput(type: string, name: string): void;
    addVarying(type: string, name: string): void;
    addVertUniform(type: string, name: string, arrayLength: number): void;
    addVertUniformParam(unifromParam: IUniformParam): void;
    addFragUniform(type: string, name: string, arrayLength: number): void;
    addFragUniformParam(unifromParam: IUniformParam): void;
    addFragFunction(codeBlock: string): void;
    addVertFunction(codeBlock: string): void;
    useTexturePreciseHighp(): void;
    addTextureSample2D(macroName: string, map2DEnabled: boolean, fragEnabled: boolean, vertEnabled: boolean): void;
    addTextureSampleCube(macroName: string, fragEnabled: boolean, vertEnabled: boolean): void;
    addTextureSample3D(macroName: string, fragEnabled: boolean, vertEnabled: boolean): void;
    isHaveTexture(): boolean;
    isHaveTexture2D(): boolean;
    useVertSpaceMats(objMatEnabled: boolean, viewMatEnabled: boolean, projMatEnabled: boolean): void;
    useFragSpaceMats(objMatEnabled: boolean, viewMatEnabled: boolean, projMatEnabled: boolean): void;

    addVertExtend(code: string): void;
    addFragExtend(code: string): void;

    addVertHeadCode(code: string): void;
    addVertMainCode(code: string): void;
    addFragHeadCode(code: string): void;
    addFragMainCode(code: string): void;
    addShaderObject(shaderObj: IAbstractShader): void;
    addShaderObjectHead(shaderObj: IAbstractShader): void;

    buildFragCode(): string;
    buildVertCode(): string
}