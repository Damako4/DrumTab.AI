// preload.js

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    invoke: ipcRenderer.invoke,
    on: ipcRenderer.on,
    send: ipcRenderer.send,
    removeAllListeners: ipcRenderer.removeAllListeners,
  }
});
