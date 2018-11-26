# React.js
facebook/create-react-app
# instalacion de npm previo, junto con node
# instalacion de React.js libreria, desde terminal
valido con version de npm superior a 5.2
npx create-react-app my-app
cd my-app
npm start

#Se plasmara success
```git
Success! Created my-app at C:\Users\User\Desktop\reactjs\React.js\my-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd my-app
  npm start

Happy hacking!
```
# Dependencias
```json
"dependencies": {
    "cheet.js": "0.3.3",
    "react": "15.4.2",
    "react-addons-css-transition-group": "15.4.2",
    "react-dom": "15.4.2",
    "react-redux": "5.0.3",
    "redux": "3.6.0",
    //para los test
     "chalk": "2.4.1",
    "debug": "4.1.0",
    "defaults": "1.0.3",
    "inquirer": "6.2.0",
    "pg": "7.6.0",
    "pg-hstore": "2.3.2",
    "sequelize": "4.41.1"
  }

  "devDependencies": {
    "babel-preset-stage-2": "6.24.1",
    "babel-core": "6.26.0",// para interpretar modelos modernos de js
    "babel-loader": "7.1.2",
    "babel-preset-es2015": "6.24.1",// para aguantar las configuraciones
    "babel-preset-react": "6.24.1",
    "clean-webpack-plugin": "0.1.17",// para limpiar carpetas en archivos en produccion
    "css-loader": "0.28.7",// para aguantar archivos de css
    "extract-text-webpack-plugin": "3.0.2",// para extraer los archivos de css
    "file-loader": "1.1.5",
    "style-loader": "0.19.0",
    "url-loader": "0.6.2",
    "webpack": "3.8.1",
    "webpack-dev-server": "2.9.3",
    // para los test y erros
    "ava": "0.25.0",
    "nyc": "13.1.0",
    "proxyquire": "2.1.0",
    "sinon": "7.1.1",
    "sqlite3": "4.0.3",
    "standard": "12.0.1"
  }
  ```
  ## despues instalarlas
  npm i
  ## scrips
  ```json
  "scripts": {
    "build:dev": "webpack-dev-server --config ./webpack.dev.config.js",
    "build": "webpack",
    "build:local": "webpack --env.NODE_ENV=local",
    "build:prod": "webpack -p --env.NODE_ENV=production",
    //para los test y erros
    "lint": "standard --fix"
  }
  ```
  #instalamos dependencias de react
  ```
  npm install react react-dom --save
```
#index.html data explicacion ReactDOM
```js
ReactDOM.render('que voy a renderizar', 'donde lo haré');
```
#documentacion de ciclos de vida de los componentes
```js
class Mi componente extends Componentes {
//---------------montado 1°parte----------------------------------------------------------

//-------------primer componente------------------------------------------------------------
 constructor() {//cuando queremos instanciar una clase
                //poner estado inicial o bindiar eventos, poner propiedades a this
 }
 //------------------------------------------------------------------------------------------

 //-------------metodo llamado antes de montarse----------------------------------------------
 componentWillMount() {// si tenemos una propieedad y queremos setear con base a esas //propiedades
//setState()
 }
 //-----------------------------------------------------------------------------------------
 //------------------------donde ponemos todos nuestros elementos---------------------------
 render() {// contiene jsx en el return
 //todos los elementos a renderizar

 }
 //-----------------------------------------------------------------------------------------

 //-----------------------------cuando los componentes ya se han montado, ya esta en pantalla
 componenteDidMount() {// para hacer setTimeOut(), setInterval(), llamar datos asia una API

 }
 //-----------------------------------------------------------------------------------------

 //-----------------------------actualizacion 2° parte--------------------------------------
 //------------------------------el componente recibira propiedades?------------------------
 componentWillReceiveProps() {
//sirve para actualizar el estado
 }
 //----------------------------------------------------------------------------------------
 //---------------se condiciona si el componente se debe volver a renderizar---------------
 shouldComponentUpdate() {
// para optimizar el rendimiendo y no hacer re-render
 }
 //--------------------------------------------------------------------------------------
 //---------------- si existen cambios se actualiza y se re-renderiza-----------------
 componentWillUpdate() {
//manda re-render
 }
 //---------------------------------------------------------------------------------------
 //-----------------------------despues del re-render-------------------------------------
 componentDidUpdate() {
//se actualizo
 }
 //---------------------------------------------------------------------------------------

 //----------------------desmontado  3° parte---------------------------------------------
 // ---------se llama una vez de que el componente se sale de la aplicacion---------------
 componentWillUnmount() {

 }
 //---------------------------------------------------------------------------------------

 //-------------------manejo de errores 4° parte -----------------------------------------
 //------------------- cuando se encuentra un error-------------------------------------
 componentDidCatch() {
//se invovca cuando existe algun error al renderizar el componente, el manejo de errores solo //existe en ramas hijos
 }
//---------------------------------------------------------------------------------------

}
```