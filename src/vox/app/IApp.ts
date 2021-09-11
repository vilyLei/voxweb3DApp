
/**
 * define the app module behavior
 */
interface IApp {

    initialize(module: any): void;

    /**
     * running per frame
     */
    run(): void;
    getModuleName():string;
    getModuleClassName():string;
    getRuntimeType():string;
}

export { IApp };