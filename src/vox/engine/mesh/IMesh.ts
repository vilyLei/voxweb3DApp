
import { Vector3D } from "../math/Vector3D";
import { Matrix4 } from "../math/Matrix4";
import { AABB } from "../math/AABB";

interface IMesh {

    bounds:AABB;
    normalType:number;
    normalScale:number;
    vtxTotal:number;
    trisNumber:number;
    
    drawMode:number;
    // vtx postion in data stream used count
    vtCount:number;
    
    vbWholeDataEnabled:boolean;
    drawInsBeginIndex:number;
    drawInsStride:number;
    drawInsTotal:number;
    /**
     * @param layoutBit vertex shader vertex attributes layout bit status.
     *                  the value of layoutBit comes from the material shdder program.
     */
    setBufSortFormat(layoutBit:number):void;
    getBufSortFormat():number;
    setTransformMatrix(matrix:Matrix4):void;
    getTransformMatrix():Matrix4;
    /**
     * @return 返回true是则表示这是基于三角面的可渲染多面体, 返回false则是一个数学方程描述的几何体(例如球体).
     *         如果是多面体实体,则可以进行三角面的相关计算等操作, 如果不是则需要进行相关的几何算法计算.
     */
    isPolyhedral():boolean;
}

export { IMesh }