
import { RendererScene } from "./scene/Renererscene";
import { ImageTextureLoader } from "./texture/ImageTextureLoader";
import {RendererParam} from "../../vox/engine/scene/RendererParam";
import { IEngine } from "./IEngine";
import { Engine } from "./Engine";

class EngineInstance implements IEngine{
    
    private m_engine: IEngine = null;
    readonly rscene: RendererScene = new RendererScene();
    readonly uiScene: RendererScene = new RendererScene();
    readonly texLoader: ImageTextureLoader = null;
    
    createRendererParam(div: HTMLDivElement): RendererParam {
        return Engine.CreateRendererParam( div );
    }
    initialize(): void {
        if (this.m_engine == null) {
            this.m_engine = Engine.GetEngine();
            let selfT: any = this;
            selfT.texLoader = this.m_engine.texLoader;
            this.rscene.initialize(this.m_engine.rscene);
            this.uiScene.initialize(this.m_engine.uiScene);
        }
    }
    run(): void {
        this.m_engine.run();
    }
}
export { EngineInstance };