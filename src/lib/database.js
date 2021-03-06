/**
 * Created by ChengZheLin on 2019/4/20.
 * Features:
 */

import Datastore from 'lowdb'
import LodashId from 'lodash-id'
import FileSync from 'lowdb/adapters/FileSync'
import path from 'path'
import fs from 'fs-extra'
import { remote, app } from 'electron'

const APP = process.type === 'renderer' ? remote.app : app
const STORE_PATH = APP.getPath('userData')

if (process.type !== 'renderer') {
  if (!fs.pathExistsSync(STORE_PATH)) {
    fs.mkdirpSync(STORE_PATH)
  }
}

const adapter = new FileSync(path.join(STORE_PATH, '/101helper.json'))

const db = Datastore(adapter)
db._.mixin(LodashId)

// 初次运行初始化
if (!db.has('app').value()) {
  db.defaults({
    app: {
      browser: false,
      browserPath: '',
      notice: false,
      proxy: '',
      proxyKey: '',
      screenshot: false,
      screenshotPath: ''
    },
    account: []
  }).write()
}

export default db
