## How to install the .exe
- You can download it [here](#).

# Electron-Calculator
A simple calculator made with electron 

## Requirements
- `Node.JS`
- Some JavaScript knowledge

## How to setup
- `cd *your project's path*` & `npx create-electron-app my-app`
- In the folder "src", delete all the files and replace them with the one provided
- `cd my-app` & `npm start`

## Convert to .exe
`electron-packager . my-app --platform=win32 --arch=x64 --out=dist/ --icon=calculator-icon.ico` You can edit `--platform=win32 --arch=x64` depending on your system
