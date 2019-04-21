/**
 * Created by ChengZheLin on 2019/4/21.
 * Features:
 */

'use strict'

export default function formatTimeStamp (timestamp, format) {
  if (!timestamp) {
    return '空缺'
  }

  timestamp = timestamp.toString().length === 13 ? timestamp / 1000 : timestamp
  let formatTime
  format = format || 'yyyy-MM-dd hh:mm:ss'
  let date = new Date(timestamp * 1000)
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  if (/(y+)/.test(format)) {
    formatTime = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  } else {
    formatTime = format
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(formatTime)) {
      formatTime = formatTime.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return formatTime
}
