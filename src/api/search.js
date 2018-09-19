import jsonp from './../common/js/jsonp'
import {commonParams, options} from './config'

export function getHotKey () {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data = Object.assign({}, commonParams, {
    uin: 0,
    needNewCode: 1,
    platform: 'h5'
  })

  return jsonp(url, data, options)
}

export function search (query, page, zhida, perpage) {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/client_search_cp'

  const data = Object.assign({}, {
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    format: 'jsonp',
    w: query,
    p: page,
    perpage,
    n: perpage,
    catZhida: zhida ? 1 : 0,
    zhidaqu: 1,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    remoteplace: 'txt.mqq.all',
    uin: 0,
    needNewCode: 1,
    platform: 'h5',
    param: 'jsonpCallback'
  })

  return jsonp(url, data, options)
}

export function searchWangYi (keyword, page, pagesize) {
  const url = 'http://mobilecdn.kugou.com/api/v3/search/song'

  const data = Object.assign({}, commonParams, {
    keyword: keyword,
    page: page,
    pagesize: pagesize,
    showtype: 1
  })
  return jsonp(url, data, options)
}

/********************************************************************/
/* 有用的jsonp */
export function searchUrl (keyword, page, pagesize) {
  const url = 'http://mobilecdn.kugou.com/api/v3/search/song'
  const data = Object.assign({}, {
    keyword: keyword,
    page: page,
    pagesize: pagesize,
    showtype: 1,
    format: 'jsonp'
  })
  return url + '?' + param(data)
}

export function param (data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}

/********************************************************************/
/* 获取热歌 */
export function searchHot () {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'
  const data = Object.assign({}, commonParams, {
    uin: 0,
    needNewCode: 1,
    platform: 'h5'
  })
  return url + '?' + param(data)
}

/********************************************************************/
/* 获取QQ搜索数据 */
export function searchQQ (word) {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/client_search_cp'
  const data = Object.assign({}, commonParams, {
    ct: 24,
    qqmusic_ver: 1298,
    new_json: 1,
    remoteplace: 'txt.yqq.center',
    searchid: 48702545513225403,
    t: 0,
    aggr: 1,
    cr: 1,
    catZhida: 1,
    ossless: 0,
    flag_qc: 0,
    p: 1,
    n: 20,
    w: word,
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq',
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    needNewCode: 0
    // jsonpCallback: 'MusicJsonCallback03212403973820188'
  })
  return url + '?' + param(data)
}
