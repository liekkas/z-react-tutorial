/**
 * Created by liekkas on 16/3/21.
 */
import { Modules, MenuIcons, Menus, FIELDS, CONVENTION } from '../constants/Consts'
import _ from 'lodash'
import fetch from 'isomorphic-fetch'
import config from '../../config'

/**
 * 根据字段和宽度生成表头信息
 * @param field
 * @param width
 */
function generateColumn(field, width, useSorter = false) {
  let result = {
    title: field.cn + (field.unit ? '(' + field.unit + ')' : ''),
    dataIndex: field.en,
    key: field.en,
    width: width + '%',
  }
  if (useSorter) {
    result.sorter = function (a, b) {
      return a[field.en] - b[field.en]
    }
  }

  return result
}

export function getInitInfo(subModule) {
  const SubModules = Menus.mapping
  let kpis,temp,columns
  let restParam = { dateType: 'D', start: '20150501', end: '20151031'}
  let searchParam = { dateType: 'D', start: '20150501', end: '20151031',
    showHour: true, rangeMode: true, subModule }
  switch(subModule) {
    //电视概况
    case SubModules.tvUserOverview.en:
    case SubModules.lbUserOverview.en:
    case SubModules.dbUserOverview.en:
      kpis = [FIELDS.覆盖用户数, FIELDS.用户数, FIELDS.覆盖率, FIELDS.用户流动率, FIELDS.流入用户数, FIELDS.流出用户数]
      temp = [FIELDS.日期].concat(kpis)
      columns = _.map(temp, function (item) {
        return generateColumn(item, 100/temp.length)
      })
      Object.assign(searchParam,{showHour: false})
      break;
    case SubModules.tvUserBehave.en:
    case SubModules.lbUserBehave.en:
      kpis = [FIELDS.使用时长, FIELDS.户均使用时长]
      temp = [FIELDS.日期].concat(kpis)
      columns = _.map(temp, function (item) {
        return generateColumn(item, 100/temp.length)
      })
      break;
    case SubModules.tvBusinessOverview.en:
      kpis = [FIELDS.覆盖用户数, FIELDS.用户数, FIELDS.覆盖率, FIELDS.使用时长, FIELDS.户均使用时长]
      temp = [FIELDS.日期, FIELDS.业务类别].concat(kpis)
      columns = _.map(temp, function (item) {
        return generateColumn(item, 100/temp.length)
      })
      break;
    case SubModules.dbUserBehave.en:
      kpis = [FIELDS.点播时长, FIELDS.户均点播时长, FIELDS.点播次数, FIELDS.户均点播次数, FIELDS.单次点播时长]
      temp = [FIELDS.日期].concat(kpis)
      columns = _.map(temp, function (item) {
        return generateColumn(item, 100/temp.length)
      })
      break;

    //直播业务
    case SubModules.lbcgUserAna.en:
      kpis = [FIELDS.用户数, FIELDS.覆盖率, FIELDS.用户指数]
      temp = [FIELDS.日期, FIELDS.频道类型].concat(kpis)
      columns = _.map(temp, function (item) {
        return generateColumn(item, 100/temp.length)
      })
      break;
    case SubModules.lbcgTimeUseAna.en:
      kpis = [FIELDS.使用时长, FIELDS.户均使用时长, FIELDS.市占率]
      temp = [FIELDS.日期, FIELDS.频道类型].concat(kpis)
      columns = _.map(temp, function (item) {
        return generateColumn(item, 100/temp.length)
      })
      break;
    case SubModules.lbChannelOrder.en:
      kpis = [FIELDS.用户指数, FIELDS.覆盖率, FIELDS.市占率, FIELDS.户均使用时长]
      temp = [FIELDS.频道名称, FIELDS.排名].concat(kpis)
      columns = _.map(temp, function (item) {
        return generateColumn(item, 100/temp.length, kpis.indexOf(item) > -1)
      })
      restParam = { dateType: 'D', start: '20150501', type: '0' }
      Object.assign(searchParam,{rangeMode: false})
      break;
    case SubModules.lbChannelAna.en:
      kpis = [FIELDS.用户指数, FIELDS.覆盖率, FIELDS.市占率, FIELDS.户均使用时长]
      temp = [FIELDS.日期, FIELDS.频道名称].concat(kpis)
      columns = _.map(temp, function (item) {
        return generateColumn(item, 100/temp.length)
      })
      restParam = { dateType: 'D', start: '20150501', end: '20151031' }
      restParam[CONVENTION.NEED_ENCODE_PREFIX + 'channel1'] = 'CCTV-1'
      restParam[CONVENTION.NEED_ENCODE_PREFIX + 'channel2'] = '湖南卫视'
      break;
    case SubModules.lbShowsOrder.en:
      kpis = [FIELDS.用户指数, FIELDS.覆盖率, FIELDS.市占率, FIELDS.户均使用时长]
      temp = [FIELDS.节目名称, FIELDS.排名, FIELDS.频道名称, FIELDS.播出时间].concat(kpis)
      const widthPct = [16,4,16,12,10,10,10,16]
      columns = _.map(temp, function (item, index) {
        return generateColumn(item, widthPct[index], kpis.indexOf(item) > -1)
      })
      restParam = { dateType: 'D', start: '20150501', type: '0', channel: '' }
      Object.assign(searchParam,{rangeMode: false})
      break;

    //点播业务
    case SubModules.dbResAvailAna.en:
      kpis = [FIELDS.节目比重, FIELDS.市占率, FIELDS.覆盖率]
      temp = [FIELDS.日期, FIELDS.节目类型].concat(kpis)
      columns = _.map(temp, function (item) {
        return generateColumn(item, 100/temp.length)
      })
      break;
    case SubModules.dbShowCenterAna.en:
      kpis = [FIELDS.点播时长, FIELDS.市占率]
      temp = [FIELDS.日期, FIELDS.TOP分组].concat(kpis)
      columns = _.map(temp, function (item) {
        return generateColumn(item, 100/temp.length)
      })
      restParam = { dateType: 'D', start: '20150501', type: '0', showType: '1', groupType: '10' }
      Object.assign(searchParam,{rangeMode: false})
      break;
    case SubModules.dbShowTypeUserAna.en:
      kpis = [FIELDS.用户数, FIELDS.覆盖率, FIELDS.用户指数]
      temp = [FIELDS.日期, FIELDS.节目类型].concat(kpis)
      columns = _.map(temp, function (item) {
        return generateColumn(item, 100/temp.length)
      })
      break;
    case SubModules.dbShowTypeTimeUseAna.en:
      kpis = [FIELDS.点播时长, FIELDS.户均点播时长, FIELDS.市占率]
      temp = [FIELDS.日期, FIELDS.节目类型].concat(kpis)
      columns = _.map(temp, function (item) {
        return generateColumn(item, 100/temp.length)
      })
      break;
    case SubModules.dbMovieOrder.en:
      kpis = [FIELDS.用户指数, FIELDS.覆盖率, FIELDS.市占率, FIELDS.户均使用时长]
      temp = [FIELDS.电影名称, FIELDS.排名].concat(kpis)
      columns = _.map(temp, function (item) {
        return generateColumn(item, 100/temp.length, kpis.indexOf(item) > -1)
      })
      restParam = { dateType: 'D', start: '20150501' }
      Object.assign(searchParam,{rangeMode: false})
      break;
    case SubModules.dbTVPlayOrder.en:
      kpis = [FIELDS.用户指数, FIELDS.覆盖率, FIELDS.市占率, FIELDS.户均使用时长]
      temp = [FIELDS.电视剧名称, FIELDS.排名].concat(kpis)
      columns = _.map(temp, function (item) {
        return generateColumn(item, 100/temp.length, kpis.indexOf(item) > -1)
      })
      restParam = { dateType: 'D', start: '20150501' }
      Object.assign(searchParam,{rangeMode: false})
      break;
    default:
      kpis = [FIELDS.覆盖用户数, FIELDS.用户数, FIELDS.覆盖率, FIELDS.用户流动率, FIELDS.流入用户数, FIELDS.流出用户数]
      temp = [FIELDS.日期].concat(kpis)
      columns = _.map(temp, function (item) {
        return generateColumn(item, 100/temp.length)
      })
      break;
  }
  return { kpis, columns, restParam, searchParam }
}

/**
 * 根据参数对象生成一个url,如果需要ENCODE,字段前面加个前缀
 * 比如params: {
 *  a: 'aaa',
 *  b: 'bbb',
 *  NEED_ENCODE_c: '需要ENCODE'
 * }
 * => ?a=aaa&b=bbb&c=%2323%....
 * @param params
 */
function parse2Url(params) {
  let url = '?'
  _.keys(params).map(function (key) {
    if (key.startsWith(CONVENTION.NEED_ENCODE_PREFIX)) {
      let splitKey = key.split(CONVENTION.NEED_ENCODE_PREFIX)[1]
      url += splitKey + '=' + encodeURI(encodeURI(params[key])) + '&'
    } else {
      url += key + '=' + params[key] + '&'
    }
  })
  return url.substr(0,url.length-1)
}

/**
 * 远程抓取数据
 * @param bind
 * @param subModule
 * @param params
 */
export function fetchData(bind,subModule,params) {
  fetch(config.REST_API_BASE_URL + subModule + parse2Url(params))
    .then(response => response.json())
    .then(function (result) {
      bind.setState({ result })
      return result
    })
    .catch(function (ex) {
    console.log(ex)
  })
}

export default {
  getInitInfo,
  fetchData,
}
