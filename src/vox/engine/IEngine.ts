/***************************************************************************/
/*                                                                         */
/*  Copyright 2018-2022 by                                                 */
/*  Vily(vily313@126.com)                                                  */
/*                                                                         */
/***************************************************************************/

import {IRendererScene} from "./scene/IRendererScene";

interface IEngine {
    rscene: IRendererScene;
    uiScene: IRendererScene;
    texLoader: any;
    run(): void;
}
export {IEngine};
