
import { IApp } from "../vox/app/IApp";
class ModuleInfo {
    name: string;
    className: string;
    url: string;

    constructor(name: string, className: string, url: string) {
        this.name = name;
        this.className = className;
        this.url = url;
    }
}
export class ModuleManager {

    private m_systemModuleInfoMap: any =
    {
        threadFuncs:    new ModuleInfo("threadFuncs","threadFuncs","static/code/engine/threadFuncs.js"),
        jsZipModule:    new ModuleInfo("jsZipModule","JSZipModule","static/code/apps/modules/jsZipModule.js")
    }

    private m_coreModule: any;

    private m_moduleMap: Map<string, IApp> = new Map();

    private m_sysModules: IApp[] = [];

    constructor(coreModule: any) {
        this.m_coreModule = coreModule;
    }
    getModuleUrlByName(moduleName: string): string {
        if(this.m_systemModuleInfoMap[moduleName] != null) {
            return this.m_systemModuleInfoMap[moduleName].url;
        }
        return "";
    }
    testSystemModuleByName(moduleName: string): boolean {
        return this.m_systemModuleInfoMap[moduleName] != null;
    }
    createSystemModuleInstanceByName(moduleName: string): void {
        let moduleInfo: ModuleInfo = this.m_systemModuleInfoMap[moduleName];
        if(moduleInfo != null) {
            let className: string = moduleInfo.className;
            let ins: IApp = new this.m_coreModule[className]() as IApp;
            this.m_coreModule[moduleName + "Ins"] = ins;
            this.addSystemModule(ins, moduleName, true);
        }
    }
    getSystemModuleInstance(moduleName: string): IApp {
        return this.m_coreModule[moduleName + "Ins"];
    }
    getModuleInstance(moduleName: string): IApp {
        return new this.m_coreModule[moduleName + "App"]();
    }
    initializeModules(): void {
        for(let i: number = 0; i < this.m_sysModules.length; ++i) {
            this.m_sysModules[i].initialize( this.m_coreModule );
        }
    }
    addSystemModule(module: IApp, moduleName: string, initModule: boolean = false): void {
        if(module != null && moduleName != "" && !this.m_moduleMap.has(moduleName)) {
            this.m_sysModules.push( module );
            console.log("addSystemModule initModule: ",initModule);
            if(initModule) {
                module.initialize( this.m_coreModule );                
            }
        }
    }
    getSystemModules(): IApp[] {
        return this.m_sysModules;
    }


}