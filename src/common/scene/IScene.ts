
import {EngineInstance} from "../../vox/engine/EngineInstance";

/**
 * A 3D APP Demo Scene
 */
interface IScene {

    initialize(engine: EngineInstance): void;
    run(): void;
}

export {IScene};