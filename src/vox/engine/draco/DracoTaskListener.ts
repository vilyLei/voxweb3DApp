/***************************************************************************/
/*                                                                         */
/*  Copyright 2018-2022 by                                                 */
/*  Vily(vily313@126.com)                                                  */
/*                                                                         */
/***************************************************************************/

interface DracoTaskListener {
    dracoParse(module: any, index: number, total: number): void;
    dracoParseFinish(modules: any[], total: number): void;
}

export {DracoTaskListener};