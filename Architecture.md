# UD-Viz Architecture

UD-Viz consists of several modules (UD-Viz-Core/Modules) and is based on iTowns (itself based on THREE.js) for the display of city geometry.

## Modules

Modules functionalities are detailed in [readme.md](https://github.com/MEPP-team/UD-Viz/blob/master/README.md).

UD-Viz Modules are :
 * Documents : DocumentHandler class, Document class + related GUI elements
 * Guided Tour : GuidedTourController class, TourStep class + related GUI elements
 * Temporal : TemporalController class + related GUI elements
 * Other : help, about (basic functionalities with their GUI elements)
 
To include a module : 
 * add the js file to the index.html, no need to add html divs for the GUI. Each module handles its own GUI elements by adding a div to the html.
 * instanciate the required classes in your main js file.
 
 See examples here for Vilo3D : [index.html](https://github.com/MEPP-team/UD-Viz/blob/master/UD-Viz-Core/examples/Vilo3D/index.html) (include the js files) and [main.js](https://github.com/MEPP-team/UD-Viz/blob/master/UD-Viz-Core/examples/Vilo3D/Main.js) (instanciate the classes, at the end of the file).
 
These modules are mostly independant from each other, with the exception of Documents and Guided Tour : GuidedTourController requires a DocumentHandler instance.

All modules have their own css file which is packed by npm.

## Asynchronous Initialization

Modules relying on an external data file are asynchronously initialized : the file loaders (ColladaLoader, CSVLoader) use callback functions to initialize objects once the loading is complete. Custom events are also used to initialize some modules after others.

For example in Vilo3D (main.js) :
 * we instanciate a DocumentHandler instance and a GuidedTourController instance.
 * The DocumentHandler constructor will begin to load the required csv file (loadDataFromFile() function with initialize() function as callback parameter).
 * When loading in complete, the initialize() function is called (callback) : the DocumentHandler instance is functional at the end of initialize().
 * At the end of the initialize() function, a custom event "docInit" is dispatched, signaling that Document Handler has finished initializing.
 * GuidedTourController has an event listener for this event : it will call its own loadDataFromFile() (with its own initialize() as callback) upon receiving the docInit event.
 * When loading is complete, the initialize() function is called : GuidedTourController instance is functional at the end of initialize().
