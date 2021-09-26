
import {RendererInstance} from "../../vox/engine/RendererInstance";

/**
 * A 3D APP Demo Scene
 */
interface IScene {

    initialize(engine: RendererInstance): void;
    run(): void;
}

export {IScene};