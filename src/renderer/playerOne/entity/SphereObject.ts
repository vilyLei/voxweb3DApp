
import {Vector3D} from "../../../vox/engine/math/Vector3D";
//import {Renderer} from "../../../vox/engine/render/Renderer";
import {ImageTextureProxy} from "../../../vox/engine/texture/ImageTextureProxy";
import {ShdCodeMaterial} from "../../../vox/engine/material/ShdCodeMaterial";
import {MaterialBuilder} from "../../../vox/engine/material/MaterialBuilder";
import {SphereEntity} from "../../../vox/engine/entity/SphereEntity";

import {Engine} from "../../../vox/engine/Engine";
import {RendererInstance} from "../../../vox/engine/RendererInstance";
import { TextureProxy } from "../../../vox/engine/texture/TextureProxy";

class SphereObject {

    private static s_tex: ImageTextureProxy = null;
    private static s_sph: SphereEntity = null;

    entity: SphereEntity;
    private m_pos: Vector3D = new Engine.Vector3D();
    constructor(){}

    initialize(engine: RendererInstance, materialBuilder: MaterialBuilder, texture: TextureProxy = null, rpIndex: number = 0): void {

        console.log("SphereObject::initialize()...");
        if(SphereObject.s_tex == null) {
            let tex:ImageTextureProxy = new Engine.ImageTextureProxy(64, 64);
            let img: HTMLImageElement = new Image();
            img.onload = (evt: any): void => {
                tex.setDataFromImage(img);
                console.log("SphereObject::initialize()...img loaded img.src: ",img.src);
            }
            img.src = "static/assets/box_wood01.jpg";
            SphereObject.s_tex = tex;
        }

        if(texture == null) texture = SphereObject.s_tex;

        let scale: number = Math.random() * 0.5 + 0.6;
        let sph: SphereEntity = new Engine.SphereEntity();
        this.m_pos.setXYZ(Math.random() * 1000.0 - 500.0, Math.random() * 600.0 - 30.0, Math.random() * 1000.0 - 500.0);
        sph.setPosition(this.m_pos);
        sph.setScaleXYZ(scale, scale, scale);

        let material: ShdCodeMaterial = materialBuilder.create();
        if(material != null) {
            sph.setMaterial( material );
        }
        sph.initialize(100.0, 20,20, [texture]);
        if(material == null) (sph.getMaterial() as any).setRGB3f(Math.random() * 1.5, Math.random() * 1.5, Math.random() * 1.5);
        engine.addEntity(sph, rpIndex);
        this.entity = sph;
    }
}

export {SphereObject};