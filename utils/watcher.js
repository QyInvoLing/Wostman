/*
 * @Author: QyInvoLing 2258191452@qq.com
 * @Date: 2023-04-25 09:58:22
 * @LastEditors: QyInvoLing
 * @LastEditTime: 2023-04-25 14:32:54
 * @FilePath: \Wostman\utils\watcher.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs');
const chokidar = require('chokidar');

const watcherInit = (configFilePath, onChange) => {

    const watcher = chokidar.watch(configFilePath);
    watcher.on('add', (path, event) => {
        console.log("[INFO]New file detected:", path)
        onChange(path, event);
    });

    watcher.on('unlink', (path, event) => {
        console.log("[INFO]File removed:", path)
        onChange(path, event);
    });

    watcher.on('change', (path, event) => {
        console.log("[INFO]File changed:", path)
        onChange(path, event);
    });
    console.log("[INFO]File change listener initialized. Path:", configFilePath)
    return watcher
}

module.exports = watcherInit;