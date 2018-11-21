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
```js
"dependencies": {
    "babel-preset-stage-2": "^6.24.1",
    "cheet.js": "0.3.3",
    "react": "15.4.2",
    "react-addons-css-transition-group": "15.4.2",
    "react-dom": "15.4.2",
    "react-redux": "5.0.3",
    "redux": "3.6.0"
  }

  "devDependencies": {
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
    "webpack-dev-server": "2.9.3"
  }
  ```
  ## despues instalarlas
  npm i