# UD-Viz : Urban Data Vizualisation

UD-Viz is a JavaScript client based on [iTowns](https://github.com/itowns/itowns) 
allowing to visualize, analyse and interact with urban data. UD-Viz's code is
located in [UD-Viz-Core](UD-Viz-Core) folder.

Server-side tools can be found [here](https://github.com/MEPP-team/UD-Serv).
## Installation
You can find install notes [here](https://github.com/MEPP-team/UD-Viz/blob/master/install.md).

## Demo
Online demos :
 - [UD-Viz](http://rict.liris.cnrs.fr/UDVDemo/UDV/UDV-Core/)
 - [Vilo3D](http://rict.liris.cnrs.fr/Vilo3D/UDV/Vilo3D/)
 
### Camera Controller

* **Left-click + drag** : User "grabs" the ground (cursor stays at the same spot on the ground) to translate camera on XY axis.
* **Right-click + drag** : camera rotation around the focus point (ground point at the center of the screen), clamped to avoid going under ground level.
* **Mousewheel** : smooth zoom toward the ground point under the mouse cursor, adjusted according to the ground distance (zoom is faster the further from the ground and cannot go through the ground).
* **Mousewheel click** (middle mouse button) : "Smart Zoom". Camera smoothly moves and rotates toward target ground point, at fixed orientation and adjusted distance.
* **S** : moves and orients camera to the start view
* **T** : moves and orients camera to top view (high altitude and pointing toward the center of the city)

The camera controller has been merged into itowns ([PR](https://github.com/iTowns/itowns/pull/454)) and is now PlanarControls. It features an animation of camera movement and orientation (called "travel" in the code) which we use to orient the camera with a document (document **oriented view**).

## Current features (regrouped by Modules) :

Each module adds new functionnalities to the application. You can find the code and the documentation (sometimes the documentation is directly in the code) by following the link under each module described below.

### Document

[Go to the module](UD-Viz-Core/src/Modules/Documents/)

* Display of documents in a 3D representation of the city, in superposition
* Filtered research (research by keyword, attribute and/or temporal research)
* All documents are loaded from an external data server and can be accessed using the **Document Inspector** window.

![](UD-Viz-Core/Doc/User/Pictures/module_pres/document.png)

This module has several extensions that add functionalities :

#### Contribute

[Go to the module](UD-Viz-Core/src/Extensions/Contribute/)

* Possibility to create a new document
* Possibility to edit and delete existing documents

#### Validation

[Go to the module](UD-Viz-Core/src/Extensions/DocumentValidation/)

This extensions works with the *Authentication* module :

* A document has information about the user who posted it.
* Users have different roles :
  * A *contributor* is a regular user
  * A *moderator* has validation rights
  * An *administrator* has all rights
* You must be logged in to contribute. A contributor must have its submissions validated by a moderator or an administrator to be published.

#### Comments

[Go to the module](UD-Viz-Core/src/Extensions/DocumentComments/)

Requires the *Authentication* module :

* Adds the possibility to comment a document (must be logged in)

### Authentication

[Go to the module](UD-Viz-Core/src/Extensions/Authentication/)

Adds user management :

* Possibility to create an account
* Possibility to log in

![](UD-Viz-Core/Doc/User/Pictures/module_pres/authentication.png)

### Temporal

[Go to the module](UD-Viz-Core/src/Modules/Temporal/)

* Basic slider + input field to select a date
* Ability to navigate between key dates (arrow buttons)
* When we enter a document "oriented view", the date is updated to match the document's date
* Key dates correspond to a temporal version of the 3d models for the "Îlot du Lac"

### City Objects

[Go to the module](UD-Viz-Core/src/Modules/CityObjects/)

* Selection of a city object, view its details
* Filter city objects from their attributes

![](UD-Viz-Core/Doc/User/Pictures/module_pres/city_object.png)

### Links

[Go to the module](UD-Viz-Core/src/Modules/Links/)

The link module serves as an extension for both *Document* and *City object* modules.

* Adds the possibility to create link between a document and a city object (many to many)
* Possibility to visualize the city objects linked to a document
* Possibility to visualize the documents linked to a city object

### Guided Tour

[Go to the module](UD-Viz-Core/src/Modules/GuidedTour/)

* A Guided Tour is a succession of Steps (document + text) that the user can follow
* Each step triggers the oriented view of its document, and opens this doc in the doc browser
* Ability to navigate between steps of a tour (previous, next) and to start/exit a tour
* Support for multiple guided tours, all loaded from a csv file (visite.csv)

### Others

* Help, About : windows with text and links
