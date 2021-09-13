const path = require('path');
const resolve = dir => path.join(__dirname, dir);
const { ENV = '' } = process.env;
//console.log("process.env: ",process.env);
console.log("process.env: ",process.env.npm_lifecycle_script);
let devDstStr = "./src/main.ts";
let appDstStr = "./src/main.ts";

let keyStr = "--voxtype=";
let compileParam = process.env.npm_lifecycle_script + "";
let keyIndx = compileParam.indexOf(keyStr);
compileParam = compileParam.slice(keyIndx + keyStr.length);
console.log("compileParam: ",compileParam);
//if(process.env.npm_lifecycle_script == "vue-cli-service serve --voxtype=dev")
if(keyIndx > 0 && compileParam != "")
{
  if(compileParam.indexOf("_") > 0) {
    let arr = compileParam.split("_");
    devDstStr = "./src/"+arr[0]+"/"+arr[1]+"/compile/dev.ts";
  }
  else {
    devDstStr = "./src/"+compileParam+"/compile/dev.ts";
  }
  appDstStr = devDstStr;
}
module.exports = {
  pages: {
    index: {
      entry: process.env.NODE_ENV === 'production' ? appDstStr : devDstStr
    }
  },
  filenameHashing: false,
  // 是否为生产环境构建生成 source map
  productionSourceMap: false,

  configureWebpack: config => {
    // TODO: ~entry in ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
    // config['resolve'] = {
    //   extensions: ['.tsx', '.ts', '.js', '.glsl'],
    //   alias: {}
    // };
    if (true) {
      config.optimization.minimizer[0].options.terserOptions.compress.warnings = false;
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true;
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = [
        'console.log'
      ];
    }
  },

  devServer: {
    port: 9000,
    disableHostCheck:true
    // https:true
  },

  chainWebpack: config => {
    config.module
      .rule('glsl')
      .test(/\.glsl$/)
      .use('raw')
      .loader('raw-loader')
      .end();
  }
};
