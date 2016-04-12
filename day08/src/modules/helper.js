/**
 * Created by liekkas on 16/3/21.
 */
import { Modules, MenuIcons, Menus, FIELDS, CONVENTION } from '../constants/Consts'
import _ from 'lodash'
import fetch from 'isomorphic-fetch'
import config from '../../config'

/**
 * 根据模块获取左侧菜单数据源
 * @param module
 * @returns {*[]}
 */
export function getMenuDatas(module) {
  return Menus[module]
}

/**
 * 获取默认菜单项,默认为第一个,如果有子菜单则为子菜单第一项
 * @param module
 */
export function getDefaultSubMenu(module) {
  const menu = Menus(module)[0]
  return menu.subMenus.length > 0 ? menu.subMenus[0].key : menu.key
}

/**
 * 根据菜单英文名称获取中文名称,用于列表的标题
 * @param subModule
 */
export function getMenuCnByEn(subModule) {
  return Menus.mapping[subModule].cn
}

/**
 * 根据字段和宽度生成表头信息
 * @param field
 * @param width
 */
function generateColumn(field, width) {
  return {
    title: field.cn + (field.unit ? '(' + field.unit + ')' : ''),
    dataIndex: field.en,
    key: field.en,
    width: width + '%',
  }
}

/**
 * 根据子模块获取搜索框的信息,包括
 * @param subModule
 */
export function getSearchParam(subModule) {
  const SubModules = Menus.mapping
  let param = { dateType: 'D', start: '20150501', end: '20151031', showHour: true }
  switch(subModule) {
    //电视概况
    case SubModules.tvUserOverview.en:
    case SubModules.lbUserOverview.en:
    case SubModules.dbUserOverview.en:
      Object.assign(param,{showHour: false})
      break
    case SubModules.tvUserBehave.en:
    case SubModules.lbUserBehave.en:
    case SubModules.tvBusinessOverview.en:
    case SubModules.dbUserBehave.en:

      break

    //直播业务
    case SubModules.lbcgUserAna.en:
    case SubModules.lbcgTimeUseAna.en:

      break;
    case SubModules.lbChannelOrder.en:

      break;
    case SubModules.lbChannelAna.en:

      break;
    case SubModules.lbShowsOrder.en:

      break;

    //点播业务
    case SubModules.maResAvailAna.en:

      break;
    case SubModules.maShowCenterAna.en:

      break;
    case SubModules.stUserAna.en:

      break;
    case SubModules.stTimeUseAna.en:

      break;
    case SubModules.movieOrder.en:

      break;
    case SubModules.tvPlayOrder.en:

      break;
    default:
      param = { dateType: 'D', start: '20150501', end: '20151031', showHour: true }
      break;
  }
  return param
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
        return generateColumn(item, 100/temp.length)
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
      restParam = { dateType: 'D', start: '20150501', end: '20151031', channel1: 'CCTV-1', channel2: '湖南卫视' }
      break;
    case SubModules.lbShowsOrder.en:
      kpis = [FIELDS.用户指数, FIELDS.覆盖率, FIELDS.市占率, FIELDS.户均使用时长]
      temp = [FIELDS.节目名称, FIELDS.排名, FIELDS.频道名称, FIELDS.播出时间].concat(kpis)
      columns = _.map(temp, function (item) {
        return generateColumn(item, 100/temp.length)
      })
      break;

    //点播业务
    case SubModules.maResAvailAna.en:
      kpis = [FIELDS.节目比重, FIELDS.市占率, FIELDS.覆盖率]
      temp = [FIELDS.日期, FIELDS.节目类型].concat(kpis)
      columns = _.map(temp, function (item) {
        return generateColumn(item, 100/temp.length)
      })
      break;
    case SubModules.maShowCenterAna.en:
      kpis = [FIELDS.点播时长, FIELDS.市占率]
      temp = [FIELDS.日期, FIELDS.TOP分组].concat(kpis)
      columns = _.map(temp, function (item) {
        return generateColumn(item, 100/temp.length)
      })
      break;
    case SubModules.stUserAna.en:
      kpis = [FIELDS.用户数, FIELDS.覆盖率, FIELDS.用户指数]
      temp = [FIELDS.日期, FIELDS.节目类型].concat(kpis)
      columns = _.map(temp, function (item) {
        return generateColumn(item, 100/temp.length)
      })
      break;
    case SubModules.stTimeUseAna.en:
      kpis = [FIELDS.点播时长, FIELDS.户均点播时长, FIELDS.市占率]
      temp = [FIELDS.日期, FIELDS.节目类型].concat(kpis)
      columns = _.map(temp, function (item) {
        return generateColumn(item, 100/temp.length)
      })
      break;
    case SubModules.movieOrder.en:
      kpis = [FIELDS.用户指数, FIELDS.覆盖率, FIELDS.市占率, FIELDS.户均使用时长]
      temp = [FIELDS.电影名称, FIELDS.排名].concat(kpis)
      columns = _.map(temp, function (item) {
        return generateColumn(item, 100/temp.length)
      })
      break;
    case SubModules.tvPlayOrder.en:
      kpis = [FIELDS.用户指数, FIELDS.覆盖率, FIELDS.市占率, FIELDS.户均使用时长]
      temp = [FIELDS.电视剧名称, FIELDS.排名].concat(kpis)
      columns = _.map(temp, function (item) {
        return generateColumn(item, 100/temp.length)
      })
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
//      const labels = _.map(result,'date');
//      const datas = _.map(result,bind.state.kpi.value);
//        console.log('>>> Overview', labels, datas)
//      const chartData = getSingleOption(labels,datas,bind.state.kpi.unit,bind.state.kpi.label)
//      bind.setState({ tableData: result, option: chartData, remoteLoading: false })
      bind.setState({ result })
      return result
    })
    .catch(function (ex) {
    console.log(ex)
  })
}

export default {
  getMenuDatas,
  getDefaultSubMenu,
  getMenuCnByEn,
  getInitInfo,
  fetchData,
  getSearchParam,
}
