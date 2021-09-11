

export interface IModuleLoader {

    hasModuleByName(name: string): boolean;
    load(purl: string, loadedFunc: () => void, name: string, className: string): void;
}