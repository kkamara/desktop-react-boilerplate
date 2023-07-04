const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');

const inProduction = app.isPackaged;

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ 
        width: 900, 
        height: 680, 
        webPreferences: {
            devTools: inProduction ? false : true,
        },
    });

    if (inProduction) {
        // index.html?exampleArg=test
        mainWindow.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
    } else {
        // :3000?exampleArg=foobarbaz
        mainWindow.loadURL('http://localhost:3000');
    }

    mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
