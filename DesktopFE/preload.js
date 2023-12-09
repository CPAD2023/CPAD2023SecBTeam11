const { contextBridge, ipcMain, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld("bridge", {
    SendData: (custdata, apiData) => ipcRenderer.invoke("SendData", custdata, apiData),
    sendinventoryData: (inventoryData) => ipcRenderer.invoke("sendinventoryData", inventoryData),
    sendGoldRate: (data) => ipcRenderer.invoke("sendGoldRate", data),
    getCustDetails: () => ipcRenderer.invoke("getCustDetails"), 
    getBills: () => ipcRenderer.invoke("getBills"),
    signin: (email, password) => ipcRenderer.invoke("signin", email, password),
    signup: (email, password) => ipcRenderer.invoke("signup", email, password),

});


