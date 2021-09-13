
export interface IModuleLoader {

    hasModuleByName(name: string): boolean;
    getSystemModuleInstance(name: string, loadedFunc: () => void): any;
    getModuleInstance(name: string, loadedFunc: () => void): any;
    load(purl: string, loadedFunc: () => void, name: string, className: string): void;
}