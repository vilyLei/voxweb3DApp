import {Shell as Demo} from "../../shell/Shell";
import { App } from "../App";

let app: App = new App();
///////////////////////////////////////////////////////////////////////////////
document.title = "Vox APP";
let demoIns: Demo = new Demo();
function main(): void {
    console.log("------ app --- init ------");
    demoIns.initialize(app);
    function mainLoop(now: any): void {
        demoIns.run();
        window.requestAnimationFrame(mainLoop);
    }
    window.requestAnimationFrame(mainLoop);
    console.log("------ app --- running ------");
}
//
main();