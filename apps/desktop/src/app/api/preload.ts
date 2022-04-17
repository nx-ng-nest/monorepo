import {
  contextBridge,
  ipcRenderer,
} from 'electron';

contextBridge.exposeInMainWorld('electron', {
  hello: () => 'Hello from Electron',
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  platform: process.platform,
});
