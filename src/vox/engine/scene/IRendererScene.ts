/***************************************************************************/
/*                                                                         */
/*  Copyright 2018-2022 by                                                 */
/*  Vily(vily313@126.com)                                                  */
/*                                                                         */
/***************************************************************************/

import {IEntityObject} from "../entity/IEntityObject";
import {IEntityObjectContainer} from "../entity/IEntityObjectContainer";
import {Color4} from "../material/Color4";
import { Camera } from "../view/Camera";

interface IRendererScene {
    
    getUid(): number;
    /**
     * @param contextBeginEnabled the default value is default
     */
    renderBegin(contextBeginEnabled: boolean): void
    /**
     * @param autoCycle the default value is true
     * @param contextBeginEnabled the default value is true
     */
    runBegin(autoCycle: boolean, contextBeginEnabled: boolean): void;
    setRayTestEanbled(enabled: boolean): void;
    update(autoCycle: boolean, mouseEventEnabled: boolean): void
    run(autoCycle: boolean): void;
    runEnd(): void;
    runAt(index: number): void;
    isRayPickSelected(): boolean;
    /**
     * add an entity to the renderer process of the renderer instance
     * @param entity IEntityObject instance(for example: DisplayEntity class instance)
     * @param processid this destination renderer process id
     * @param deferred if the value is true,the entity will not to be immediately add to the renderer process by its id
     */
    addEntity(entity: IEntityObject, processIndex: number, deferred: boolean): void;
    removeEntity(entity: IEntityObject): void;
    addContainer(child: IEntityObjectContainer, processIndex: number): void;
    removeContainer(child: IEntityObjectContainer): void;

    appendARendererProcess(batchEnabled: boolean, processFixedState: boolean): void;
    drawEntity(entity: IEntityObject, useGlobalUniform: boolean,  forceUpdateUniform: boolean): void;
    /**
     * @param type event type
     * @param target event listerner
     * @param func event listerner callback function
     * @param captureEnabled the default value is true
     * @param bubbleEnabled the default value is false
     */
    addEventListener(type: number, target: any, func: (evt: any) => void, captureEnabled: boolean, bubbleEnabled: boolean): void;
    /**
     * @param type event type
     * @param target event listerner
     * @param func event listerner callback function
     */
    removeEventListener(type: number, target: any, func: (evt: any) => void): void;
    getCamera(): Camera;
    updateCamera(): void;

    
    setClearUint24Color(colorUint24: number, alpha: number): void;
    setClearRGBColor3f(pr: number, pg: number, pb: number): void;
    setClearRGBAColor4f(pr: number, pg: number, pb: number, pa: number): void;
    setClearColor(color: Color4): void;
    setRenderToBackBuffer(): void;
}
export {IRendererScene};
