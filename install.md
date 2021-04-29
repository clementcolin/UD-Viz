# INSTALL NOTES

## Prerequisite: install nodejs and npm

* **Ubuntu**
  - Install and update npm
    ```
    sudo apt-get install npm    ## Will pull NodeJS
    sudo npm install -g n     
    sudo n latest
    ```
  - References: [how can I update Nodejs](https://askubuntu.com/questions/426750/how-can-i-update-my-nodejs-to-the-latest-version), and [install Ubuntu](http://www.hostingadvice.com/how-to/install-nodejs-ubuntu-14-04/#ubuntu-package-manager)

## Installation of the client side
```
  git clone https://github.com/MEPP-team/UD-Viz.git
  cd UD-Viz/UD-Viz-Core
  npm install
  npm start
```

### Developer note
When working on a specific version of the code (in particular when making changes to the underlying iTowns) you might (will) need to work with a specific version of iTowns and thus use a different install process. Refer to the 
[install.sh shell script](https://github.com/MEPP-team/UD-Viz/blob/0512f4eb0b2322224c1a4c332b8d74c6b0d1a3f8/UD-Viz-Core/install.sh) for concrete means on how to achieve this.

## Running a demo

Use your web browser to open
`http://localhost:8080/`.

If the server-side component is not installed on your computer, you will not be able to run the **full** module demo of Urban Data Viewer.

Thus, you can choose one of those solutions to do so:

  * Either you just need a view of 3D objects, in which case there is nothing more to do
  
  * Or you want to have an insight of all UD-Viz features (including handling of documents), then you need install all the tools necessary for the server-side [here](https://github.com/MEPP-team/RICT/tree/master/Install/Readme.md) in order to be able to run it locally;

  * Or you can also modify the attribute _server.url_ of the file `<path-to-UD-Viz>/UD-Viz-Core/examples/data/config/generalDemoConfig.json` as described below:
    ```
    "url":"http://rict.liris.cnrs.fr:1525/",
    ```
You will then be able to run the full module demo of UD-Viz.

## Notes

* For an install of the full pipeline of our application refer to
[these install notes](https://github.com/MEPP-team/RICT/tree/master/Install/Readme.md).

* **Windows**
  - Install and update npm with Windows Powershell
    ```
    iex (new-object net.webclient).downstring(‘https://get.scoop.sh’)
    scoop install nodejs
    cd UD-Viz/UD-Viz-Core
    npm install
    npm start
    ```
