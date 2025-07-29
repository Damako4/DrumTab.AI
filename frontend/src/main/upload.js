const { spawn } = require('child_process');
const { isDev } = require('electron-is-dev')
const { path } = require('path');
const { ipcMain } = require('electron');

// START UPLOAD PROCESS



module.exports = { setupUploadHandler }