/***************************************************************************/
/*                                                                         */
/*  Copyright 2018-2022 by                                                 */
/*  Vily(vily313@126.com)                                                  */
/*                                                                         */
/***************************************************************************/

interface IShdUniform {

    next:IShdUniform;
    updateData():void;
    destroy():void;
}
export {IShdUniform};
