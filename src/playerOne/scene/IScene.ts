
import {RendererInstance} from "../../vox/engine/RendererInstance";

/**
 * define the app demo cene behavior
 */
interface IScene {

    initialize(engine: RendererInstance): void;
    run(): void;
}

export {IScene};