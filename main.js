var electron = require('electron') //引入

var app = electron.app //应用app

var BrowserWindow = electron.BrowserWindow //窗口引用

var mainWindow = null //声明要打开的window

app.on('ready',()=>{
    mainWindow = new BrowserWindow({width:300,height:300}) //初始主窗口
    mainWindow.loadFile('index.html')//加载html页面
    mainWindow.on('close',()=>{
        mainWindow=null
    })
})


