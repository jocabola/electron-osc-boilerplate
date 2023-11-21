'use strict';
const { app, BrowserWindow } = require('electron');

const path = require('path');

let mainWindow = null;
const createWindow = () => {

	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		fullscreen: true,
		fullscreenable: true,
		frame: false,
		webPreferences: {
			contextIsolation: false,
			nodeIntegration: true,
			preload: path.join(__dirname, './preload.js'),
		},
	});

		mainWindow.webContents.session.clearStorageData();

		// and load the index.html of the app.
		mainWindow.loadURL(`file://${__dirname}/public/index.html`);
		console.log('Load url');
	};

	app.on('window-all-closed', () => {
		if (process.platform !== 'darwin') app.quit();
	});

	app.whenReady().then(createWindow);
	app.whenReady().then(() => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});