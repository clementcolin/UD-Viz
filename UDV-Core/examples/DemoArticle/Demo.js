import { BaseDemo } from '../../src/Utils/BaseDemo/js/BaseDemo.js';

let baseDemo = new BaseDemo({
    iconFolder: '../data/icons',
    imageFolder: '../data/img',
});

baseDemo.appendTo(document.body);

baseDemo.loadConfigFile('../data/config/generalDemoConfig.json').then(() => {
    // Initialize iTowns 3D view
    baseDemo.init3DView('lyon_all_districts');
    console.time("loading time");
    baseDemo.add3DTilesLayer('building-lyon-2009');
    // baseDemo.add3DTilesLayer('building-lyon-2012');
    // baseDemo.add3DTilesLayer('building-lyon-2015');
    baseDemo.update3DView();
});