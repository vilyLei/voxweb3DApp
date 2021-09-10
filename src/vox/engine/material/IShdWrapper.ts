/***************************************************************************/
/*                                                                         */
/*  Copyright 2018-2022 by                                                 */
/*  Vily(vily313@126.com)                                                  */
/*                                                                         */
/***************************************************************************/
/**
 * 只能由渲染器对外提供
 */
import IShdBuilder from "./IShdBuilder";
import {IShdUniform} from "./IShdUniform";

interface IShdWrapper {

    initialize(): void;
    buildThisCode(codeBuilder:IShdBuilder): void;
    getFragShaderCode(codeBuilder:IShdBuilder): string;
    getVtxShaderCode(codeBuilder:IShdBuilder): string;
    
    createSharedUniforms():IShdUniform[];
    getUniqueShaderName(): string;
}
export {IShdWrapper};
