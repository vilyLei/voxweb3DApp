

import { Vector3D } from "../math/Vector3D";
import { Color4 } from "../material/Color4";
import { EntityObject } from "./EntityObject";
import { Engine } from "../Engine";

class LineEntity extends EntityObject {

    color: Color4 = new Engine.Color4();
    dynColorEnabled: boolean = false;
    
    private m_currEngity: LineEntity = null;
    constructor() {
        super(false);
        this.m_voxEntity = this.m_currEngity = new Engine.LineEntity();
    }
    destroy() {
        super.destroy();
        if (this.m_voxEntity == null) {
            this.m_currEngity = null;
        }
    }

    initialize(begin: Vector3D, end: Vector3D): void {
        this.m_currEngity.color.copyFrom( this.color );
        this.m_currEngity.dynColorEnabled = this.dynColorEnabled;
        this.m_currEngity.initialize(begin, end);
    }
    initializeRectXOY(px: number, py: number, pw: number, ph: number): void {
        this.m_currEngity.color.copyFrom( this.color );
        this.m_currEngity.dynColorEnabled = this.dynColorEnabled;
        this.m_currEngity.initializeRectXOY(px, py, pw, ph);
    }
}

export { LineEntity }