
import {EngineInstance} from "../../vox/engine/EngineInstance";

/**
 * define the app demo cene behavior
 */
interface IScene {

    initialize(engine: EngineInstance): void;
    run(): void;
}

export {IScene};