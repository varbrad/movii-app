# Movii App
A movie finding and suggestion app that hooks into local cinema listings.

## How to Build
1. Install NodeJS.
2. Run `npm install` inside the project directory.
3. Install a global copy of the Cordova CLI runtime via `npm install cordova -g`
* Run `npm run dev` to begin a local development server running the application in a web browser.
* Run `npm run android` to bundle the application code and deploy the application to a connected device or emulator. This may require that the cordova-android environment is properly setup via `cordova platform add android` __[see note below]__

__Note__: Android SDK Tools 25.3.1 dropped support for the `android` binary release, and subsequently moved the resulting Gradle build wrapper that Cordova uses in order to build the application. As such, until Cordova 7.x is released, an updated and explicit installation of the updated android platform may be required.

````
cordova platform add android@6.2.1
````
