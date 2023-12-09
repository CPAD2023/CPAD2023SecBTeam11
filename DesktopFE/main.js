const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path                            = require('path');
var rate = 5600;
const fs                              = require("fs");
const signIn = require("./config/signin");
const signUp = require("./config/signup");
const apiUrl = "http://localhost:8000/";


let authWindow = null;

let win  = null;

function createMainWindow() {
    win = new BrowserWindow({
        width: 1800,
        height: 900,
        // frame: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: true,
            enableRemoteModule: true,
        }
    });
    ipcMain.handle('SendData', SendData);
    ipcMain.handle('sendinventoryData', sendinventoryData);
    ipcMain.handle('sendGoldRate', sendGoldRate);
    ipcMain.handle('getCustDetails', getCustDetails);
    ipcMain.handle('getBills', getBills);
    // ipcMain.handle('signin', signin);
    // ipcMain.handle('signup', signup);


    win.loadFile('src/mainpage.html');  
}


function createAuthWindow() {
    authWindow = new BrowserWindow({ 
        width: 1800,
        height: 900,
        // frame: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: true,
            enableRemoteModule: true,
        }
     });
     ipcMain.handle('signin', signin);
    ipcMain.handle('signup', signup);


    authWindow.loadFile('src/LoginLogout.html');
  
    authWindow.on('closed', function () {
      authWindow = null;
    });
  }

  function openNewWindow() {
    // Perform your authentication logic here
    // For demonstration purposes, let's assume authentication is successful
    const isAuthenticated = true;
  
    if (isAuthenticated) {
      if (authWindow) {
        authWindow.close();
      }
  
      createMainWindow();
    }
  }

  function handleAuthentication() {
    openNewWindow();
  }

  app.on('activate', function () {
    if (win === null) {
      createMainWindow();
    }
  });
  


app.whenReady().then(createAuthWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit();
})

var signin = async (request, email, password) => {
    var data = {
        email: email,
        password: password
    };
    fetch(apiUrl + 'signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => {
        console.log(response.status);
        if(response.status == 200)
            handleAuthentication();
        else{
            dialog.showErrorBox("Error", 'Authentication Failed!');
        }
    }) 
    .catch((err) => {
        console.log(err);
        dialog.showErrorBox("Error", 'Authentication Failed!');

    })
}
var signup = async (request, email, password) => {
    var data = {
        email: email,
        password: password
    };
    fetch(apiUrl + 'signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => {
        console.log(response.status);
    }) 
    .catch((err) => {
        console.log(err);
    })
}



var postCall = async (endPoint, data) => {
    fetch(apiUrl + endPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
    })
    .catch((err) => {
        console.log(err);
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
      });
}



var sendGoldRate = async (request, data) => {
    // console.log(rate);
    await postCall("rates", data);
}

var SendData = async (request, custData, data) => {
    // console.log(custData);
    // console.log(data);
    await postCall("bills", data);
    await postCall("customers", custData);
}

var sendinventoryData = async (request, data) => {
    // console.log(data);
    await postCall("inventory", data);
}

var getBills = async (request) => {
    fetch(apiUrl + "bills")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
    })
    .catch((err) => {
        console.log(err);
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
    console.error('Fetch error:', error);
    });
}

var getCustDetails = async (request) => {
    fetch(apiUrl + "customers")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
    })
    .catch((err) => {
        console.log(err);
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
    console.error('Fetch error:', error);
    });
}