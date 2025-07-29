import { app, BrowserWindow } from 'electron'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { createWindow } from './window.js';
import { setupUploadHandler } from './upload.js';

// Prevent Vsync Error
app.disableHardwareAcceleration(); 

// Setup Handlers
setupUploadHandler()

// Start App
app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.damako.drumtab')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
