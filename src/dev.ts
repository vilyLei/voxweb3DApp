
import {DemoRendererIsolate as Demo} from "./distribution/DemoRendererIsolate";
//import {PlayerOne as Demo} from "./distribution/rendererIsolate/PlayerOne";

///////////////////////////////////////////////////////////////////////////////
document.title = "Vox APP";
let demoIns: Demo = new Demo();
let ins: any = demoIns;
if (ins.runBegin != undefined) {
    function main1(): void {
        console.log("------ demo --- init ------");
        ins.initialize({});
        function mainLoop(now: any): void {
            ins.runBegin();
            ins.run();
            ins.runEnd();
            window.requestAnimationFrame(mainLoop);
        }
        window.requestAnimationFrame(mainLoop);
        console.log("------ demo --- running ------");
    }
    //
    main1();
}
else {
    function main2(): void {
        console.log("------ demo --- init ------");
        demoIns.initialize({});
        function mainLoop(now: any): void {
            demoIns.run();
            window.requestAnimationFrame(mainLoop);
        }
        window.requestAnimationFrame(mainLoop);
        console.log("------ demo --- running ------");
    }
    //
    main2();
}
