
import { Vector3D } from "../math/Vector3D";
import { Color4 } from "../material/Color4";
import { Camera } from "../view/Camera";
import { EntityObject } from "./EntityObject";
import { Engine } from "../Engine";

class DashedLineEntity extends EntityObject {

    private m_currEngity: DashedLineEntity = null;
    constructor() {
        super(false);
        this.m_voxEntity = this.m_currEngity = new Engine.DashedLineEntity();
    }
    destroy() {
        super.destroy();
        if (this.m_voxEntity == null) {
            this.m_currEngity = null;
        }
    }

    dynColorEnabled: boolean = true;
    
    initializeLS(va: Vector3D, vb: Vector3D): void {
        this.m_currEngity.dynColorEnabled = this.dynColorEnabled;
        this.m_currEngity.initializeLS(va, vb);
    }
    
    initiazlizeFrustrum(camera: Camera): void {
        this.m_currEngity.dynColorEnabled = this.dynColorEnabled;
        this.m_currEngity.initiazlizeFrustrum( camera );
    }

    initializeBySegmentLine(pvList: Vector3D[], colors: Color4[]): void {
        this.m_currEngity.dynColorEnabled = this.dynColorEnabled;
        this.m_currEngity.initializeBySegmentLine( pvList, colors );
    }

    initializeByPosition(pvList: Vector3D[]): void {        
        this.m_currEngity.dynColorEnabled = this.dynColorEnabled;
        this.m_currEngity.initializeByPosition( pvList );
    }
}

export { DashedLineEntity }