/***************************************************************************/
/*                                                                         */
/*  Copyright 2018-2022 by                                                 */
/*  Vily(vily313@126.com)                                                  */
/*                                                                         */
/***************************************************************************/

import { Vector3D } from "../math/Vector3D";

interface RendererParam {

    // display 3d view buf size auto sync window size
    autoSyncRenderBufferAndWindowSize: boolean;
    maxWebGLVersion: number;
    cameraPerspectiveEnabled: boolean;
    // event flow control enable
    evtFlowEnabled: boolean;
    // x: fov, y: near, z: far
    readonly camProjParam: Vector3D;

    readonly camPosition: Vector3D;
    readonly camLookAtPos: Vector3D;
    readonly camUpDirect: Vector3D;

    batchEnabled: boolean;
    processFixedState: boolean;

    /**
     * @param   tickUpdateTime default value 50 ms delay
     */
    setTickUpdateTime(tickUpdateTime: number): void;
    getTickUpdateTime(): number;
    setPolygonOffsetEanbled(polygonOffsetEnabled: boolean): void;
    getPolygonOffsetEanbled(): boolean;
    setDitherEanbled(ditherEnabled: boolean): void;
    getDitherEanbled(): boolean;
    getDiv(): HTMLElement;
    getRenderContextAttri(): any;
    setAttriDepth(boo: boolean): void;
    setAttriStencil(boo: boolean): void;
    setAttriAlpha(boo: boolean): void;
    setAttriPremultipliedAlpha(boo: boolean): void;
    setAttriAntialias(boo: boolean): void;
    setAttripreserveDrawingBuffer(boo: boolean): void;
    setAttriHightPowerPreference(boo: boolean): void;
    setMatrix4AllocateSize(total: number): void;
    getMatrix4AllocateSize(): number;

    setCamProject(fov_angle_degree: number, near: number, far: number): void;

    setCamPosition(px: number, py: number, pz: number): void;
    setCamLookAtPos(px: number, py: number, pz: number): void;
    setCamUpDirect(px: number, py: number, pz: number): void;
}

export { RendererParam };