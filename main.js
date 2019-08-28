'use strict'

const path = require('path')
const { app } = require('electron')
const Window = require('./src/Window')

function main() {
    let rootWindow = new Window({
        file: path.resolve(__dirname,'renderer/index.html')
    })
}

app.on('ready', main)
app.on('window-all-closed', () => app.quit())
