/***************************************************************************/
/*                                                                         */
/*  Copyright 2018-2022 by                                                 */
/*  Vily(vily313@126.com)                                                  */
/*                                                                         */
/***************************************************************************/

interface IShaderUniform
{
    uns: string;
    always:boolean;
    next:IShaderUniform;
}
export {IShaderUniform};