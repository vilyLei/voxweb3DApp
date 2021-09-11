
import {ShellDev as Demo} from "./ShellDev";
//  import {Shell as Demo} from "./Shell";

///////////////////////////////////////////////////////////////////////////////
document.title = "Vox APP";
let demoIns: Demo = new Demo();
function main(): void {
    console.log("------ app --- init ------");
    demoIns.initialize({});
    function mainLoop(now: any): void {
        demoIns.run();
        window.requestAnimationFrame(mainLoop);
    }
    window.requestAnimationFrame(mainLoop);
    console.log("------ app --- running ------");
}
//
main();