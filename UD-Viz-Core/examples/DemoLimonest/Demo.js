import { BaseDemo } from '../../src/Utils/BaseDemo/js/BaseDemo.js';
import { CityObjectStyle } from "../../src/Utils/3DTiles/Model/CityObjectStyle.js";
import { TilesManager } from "../../src/Utils/3DTiles/TilesManager.js";


let baseDemo = new BaseDemo({
    iconFolder: '../data/icons',
    imageFolder: '../data/img',
    logos: ['logo-liris.png','logo-univ-lyon.png']
});

baseDemo.appendTo(document.body);


function registerIfcStyle(tilesmanager) {
    tilesmanager.registerStyle('Wall', new CityObjectStyle({
        materialProps: { opacity: 1, color: 0xFCF8C9 }
        }));
    tilesmanager.registerStyle('IfcWindow', new CityObjectStyle({
        materialProps: { opacity: 0.6, color: 0x36B9D6 }
        }));
    tilesmanager.registerStyle('Pipe', new CityObjectStyle({
            materialProps: { opacity: 1, color: 0xFF7F50 }
        }));
    tilesmanager.registerStyle('Duct', new CityObjectStyle({
        materialProps: { opacity: 1, color: 0xADD8E6 }
    }));
}

function getIfcStyleByClass(ifcClass){
    if(ifcClass.includes("Pipe")){return "Pipe";}
    if(ifcClass.includes("Duct")){return "Duct";}
    if(ifcClass == 'IfcWall' || ifcClass.includes('Stair') || ifcClass == 'IfcSlab' ){
        return 'Wall';
    }
    if(ifcClass == 'IfcWindow'){return "IfcWindow";}

    return undefined;
}

function setIfcStyles(layerManager,layerIFC) {
    if(layerManager.getTilesManagerByLayerID(layerIFC) != undefined) {
        let tilesmanager = layerManager.getTilesManagerByLayerID(layerIFC);
        registerIfcStyle(tilesmanager);
        tilesmanager.addEventListener(
            TilesManager.EVENT_TILE_LOADED, 
            function (event) {
                for (let j = 0; j < tilesmanager.tiles.length;j++)
                {
                    if(tilesmanager.tiles[j] != undefined){
                        if(tilesmanager.tiles[j].cityObjects != undefined ){
                            for (let k = 0; k < tilesmanager.tiles[j].cityObjects.length;k++)
                            {      
                                let style = getIfcStyleByClass(getIfcClasse(tilesmanager.tiles[j].cityObjects[k]));
                                if(style != undefined){
                                    tilesmanager.setStyle(tilesmanager.tiles[j].cityObjects[k].cityObjectId,style);
                                }
                            }
                            tilesmanager.applyStyleToTile(tilesmanager.tiles[j].tileId,{
                                updateFunction:
                                    tilesmanager.view.notifyChange.bind(tilesmanager.view)
                                });
                                tilesmanager.view.notifyChange();
                        }
                    }
                }
            }
        )
    }
}

function getIfcClasse(cityObject) {
    return cityObject.tile.batchTable.content.classe[cityObject.batchId];

}

baseDemo.loadConfigFile('../data/config/generalDemoConfig.json').then(() => {
    baseDemo.addLogos();
    // Initialize iTowns 3D view
    baseDemo.init3DView('limonest');
    baseDemo.addBaseMapLayer();
    baseDemo.addElevationLayer();
    baseDemo.setupAndAdd3DTilesLayer('limonest_building');
    baseDemo.update3DView();


    ////// REQUEST SERVICE
    const requestService = new udvcore.RequestService();


    baseDemo.config.server = baseDemo.config.servers["limonest_bron"];

    ////// GEOCODING EXTENSION
    const geocodingService = new udvcore.GeocodingService(requestService,
        baseDemo.extent, baseDemo.config);
    const geocodingView = new udvcore.GeocodingView(geocodingService,
        baseDemo.controls, baseDemo.view);
    baseDemo.addModuleView('geocoding', geocodingView, {
        binding: 's',
        name: 'Address Search'
    });


    ////// CITY OBJECTS MODULE
    const cityObjectModule = new udvcore.CityObjectModule(baseDemo.layerManager, baseDemo.config);
    baseDemo.addModuleView('cityObjects', cityObjectModule.view);

    ////// 3DTILES DEBUG
    const debug3dTilesWindow = new udvcore.Debug3DTilesWindow(baseDemo.layerManager, baseDemo.view);
    baseDemo.addModuleView('3dtilesDebug', debug3dTilesWindow, {
        name: '3DTiles Debug'
    });

    ////// CAMERA POSITIONER
    const cameraPosition = new udvcore.CameraPositionerView(baseDemo.view,
        baseDemo.controls);
    baseDemo.addModuleView('cameraPositioner', cameraPosition);

    ////// LAYER CHOICE
    const layerChoice = new udvcore.LayerChoice(baseDemo.layerManager);
    baseDemo.addModuleView('layerChoice', layerChoice, {
        name: 'layerChoice'
    });

    setIfcStyles(baseDemo.layerManager,"3d-tiles-layer-building")


});
