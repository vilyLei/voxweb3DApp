
var pwindow: any = window;
if(pwindow["VoxCore"] == undefined) {
    pwindow["VoxCore"] = {};
}
var VoxCore = pwindow["VoxCore"];
import {App} from "../App";
VoxCore["mouseEventApp"] = App;
