const { spawn } = require('child_process');
const isDev = require('electron-is-dev')
const path = require('path');
const { ipcMain, dialog } = require('electron');

// Choose path depending on dev
export function setupUploadHandler() {
    const scriptPath = isDev
        ? path.resolve(__dirname, '../../../backend/entry.py')
        : path.resolve(process.resourcesPath, 'backend/entry.py')

    ipcMain.handle('upload-start', async (event) => {
        // Show upload dialog
        const result = await dialog.showOpenDialog({
            properties: ['openFile'],
            filters: [
                { name: 'Audio', extensions: ['wav', 'mp3', 'flac', 'ogg'] }
            ]
        })

        if (result.canceled || result.filePaths.length === 0) {
            throw new Error('File selection canceled');
        }

        const file = result.filePaths[0];

        return new Promise((resolve, reject) => {
            // Spawn upload process
            const python = spawn('python3', [scriptPath, file]);

            let output = ''
            let error = ''

            python.stdout.on('data', (data) => {
                output += data.toString();
            });

            python.stderr.on('data', (data) => {
                error += data.toString();
            });

            python.on('close', (code) => {
                if (code === 0) {
                    resolve(output.trim());
                } else {
                    reject(new Error(`Python exited with code ${code}: ${error}`));
                }
            });

            python.stdin.write(file);
            python.stdin.end();
        })
    })
}

module.exports = { setupUploadHandler }