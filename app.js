/*
 * @Author: QyInvoLing 2258191452@qq.com
 * @Date: 2023-04-24 10:41:49
 * @LastEditors: QyInvoLing
 * @LastEditTime: 2023-04-25 14:30:34
 * @FilePath: \Wostman\app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path');
const watcherInit = require(path.join(__dirname, "utils/watcher"))
const configFilePath = path.join(__dirname, 'config');

const watcher = watcherInit(configFilePath,console.log)
