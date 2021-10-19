
import {RendererParam} from "../../vox/engine/scene/RendererParam";
/**
 * define the app module behavior
 */
interface IApp {

    initialize(module: any): void;
    getRendererParam(): RendererParam;
    startup(): void;
    quit(): void;
    isRunning(): boolean;
    /**
     * running per frame
     */
    run(): void;
    getModuleName(): string;
    getModuleClassName(): string;
    getRuntimeType(): string;
}

export { IApp };