const path = require('path');
const { app, BrowserWindow } = require('electron');


const createWindow = () => {

    const mainWindow = new BrowserWindow({
        height: 330,
        width: 456,
        frame: false,
        icon: path.join(__dirname, './img/icon.ico'),
        resizable: false
    });

    mainWindow.loadFile('./src/index.html');
};

app.whenReady().then(() => {
    createWindow();
});