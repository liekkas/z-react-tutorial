/**
 * Created by liekkas on 16/1/5.
 */
import userOverview1 from './icons/userOverview1.png'
import userOverview2 from './icons/userOverview2.png'
import userBehave1 from './icons/userBehave1.png'
import userBehave2 from './icons/userBehave2.png'
import allBiz1 from './icons/allBiz1.png'
import allBiz2 from './icons/allBiz2.png'
import liveUserAnalysis1 from './icons/liveUserAnalysis1.png'
import liveUserAnalysis2 from './icons/liveUserAnalysis2.png'
import channelGroupAnalysis1 from './icons/channelGroupAnalysis1.png'
import channelGroupAnalysis2 from './icons/channelGroupAnalysis2.png'
import channelOrder1 from './icons/channelOrder1.png'
import channelOrder2 from './icons/channelOrder2.png'
import channelAnalysis1 from './icons/channelAnalysis1.png'
import channelAnalysis2 from './icons/channelAnalysis2.png'
import showOrder1 from './icons/showOrder1.png'
import showOrder2 from './icons/showOrder2.png'
import demandUser1 from './icons/demandUser1.png'
import demandUser2 from './icons/demandUser2.png'
import mediaAsset1 from './icons/mediaAsset1.png'
import mediaAsset2 from './icons/mediaAsset2.png'
import showType1 from './icons/showType1.png'
import showType2 from './icons/showType2.png'

export const MenuIcons = {
  userOverview1,
  userOverview2,
  userBehave1,
  userBehave2,
  allBiz1,
  allBiz2,
  liveUserAnalysis1,
  liveUserAnalysis2,
  channelGroupAnalysis1,
  channelGroupAnalysis2,
  channelOrder1,
  channelOrder2,
  channelAnalysis1,
  channelAnalysis2,
  showOrder1,
  showOrder2,
  demandUser1,
  demandUser2,
  mediaAsset1,
  mediaAsset2,
  showType1,
  showType2,
}

//菜单左侧导航信息
export const Menus = {
  tvOverview : [
    {
      name: '用户概况', key: 'tvUserOverview', subMenus: [],
      icons: [MenuIcons.userOverview1, MenuIcons.userOverview2],
    },
    {
      name: '用户行为', key: 'tvUserBehave', subMenus: [],
      icons: [MenuIcons.userBehave1, MenuIcons.userBehave2],
    },
    {
      name: '全业务概况', key: 'tvBusinessOverview', subMenus: [],
      icons: [MenuIcons.allBiz1, MenuIcons.allBiz2]
    },
  ],
  liveBroadcast: [
    {
      name: '直播用户分析', key: 'liveBroadcast', subMenus: [
        { name: '用户概况', key: 'lbUserOverview' },
        { name: '用户行为', key: 'lbUserBehave' },
      ],
      icons: [MenuIcons.liveUserAnalysis1, MenuIcons.liveUserAnalysis2],
    },
    {
      name: '直播频道组分析', key: 'lbChannelGroup', subMenus: [
        { name: '用户分析', key: 'lbcgUserAna' },
        { name: '使用时长分析', key: 'lbcgTimeUseAna' },
      ],
      icons: [MenuIcons.channelGroupAnalysis1, MenuIcons.channelGroupAnalysis2],
    },
    {
      name: '直播频道排名', key: 'lbChannelOrder', subMenus: [],
      icons: [MenuIcons.channelOrder1, MenuIcons.channelOrder2],
    },
    {
      name: '直播频道分析', key: 'lbChannelAna', subMenus: [],
      icons: [MenuIcons.channelAnalysis1, MenuIcons.channelAnalysis2]
    },
    {
      name: '直播节目排名', key: 'lbShowsOrder', subMenus: [],
      icons: [MenuIcons.showOrder1, MenuIcons.showOrder2]
    },
  ],
  demandBroadcast: [
    {
      name: '点播用户分析', key: 'demandBroadcast', subMenus: [
      { name: '用户概况', key: 'dbUserOverview' },
      { name: '用户行为', key: 'dbUserBehave' },
    ],
      icons: [MenuIcons.demandUser1, MenuIcons.demandUser2],
    },
    {
      name: '媒资概况分析', key: 'dbMediaAssets', subMenus: [
      { name: '资源利用率分析', key: 'dbResAvailAna' },
      { name: '节目集中度分析', key: 'dbShowCenterAna' },
    ],
      icons: [MenuIcons.mediaAsset1, MenuIcons.mediaAsset2],
    },
    {
      name: '节目类型分析', key: 'dbShowTypeAna', subMenus: [
      { name: '用户分析', key: 'dbShowTypeUserAna' },
      { name: '点播时长分析', key: 'dbShowTypeTimeUseAna' },
    ],
      icons: [MenuIcons.showType1, MenuIcons.showType2],
    },
    {
      name: '节目排名分析', key: 'dbShowsOrder', subMenus: [
      { name: '电影榜单', key: 'dbMovieOrder' },
      { name: '电视剧榜单', key: 'dbTVPlayOrder' },
    ],
      icons: [MenuIcons.showOrder1, MenuIcons.showOrder2],
    },
  ],
  mapping: {
    tvOverview: { cn: '电视概况', en: 'tvOverview' },
    tvUserOverview: { cn: '用户概况', en: 'tvUserOverview' },
    tvUserBehave: { cn: '用户行为', en: 'tvUserBehave' },
    tvBusinessOverview: { cn: '全业务概况', en: 'tvBusinessOverview' },

    liveBroadcast: { cn: '直播业务', en: 'liveBroadcast' },
    lbUserAna: { cn: '直播用户分析', en: 'lbUserAna' },
    lbUserOverview: { cn: '直播用户概况', en: 'lbUserOverview' },
    lbUserBehave: { cn: '直播用户行为', en: 'lbUserBehave' },
    lbChannelGroup: { cn: '直播频道组分析', en: 'lbChannelGroup' },
    lbcgUserAna: { cn: '用户分析', en: 'lbcgUserAna' },
    lbcgTimeUseAna: { cn: '使用时长分析', en: 'lbcgTimeUseAna' },
    lbChannelOrder: { cn: '直播频道排名', en: 'lbChannelOrder' },
    lbChannelAna: { cn: '直播频道分析', en: 'lbChannelAna' },
    lbShowsOrder: { cn: '直播节目排名', en: 'lbShowsOrder' },

    demandBroadcast: { cn: '点播业务', en: 'demandBroadcast' },
    dbUserAna: { cn: '点播用户分析', en: 'dbUserAna' },
    dbUserOverview: { cn: '点播用户概况', en: 'dbUserOverview' },
    dbUserBehave: { cn: '点播用户行为', en: 'dbUserBehave' },
    dbMediaAssets: { cn: '媒资概况分析', en: 'dbMediaAssets' },
    dbResAvailAna: { cn: '资源利用率分析', en: 'dbResAvailAna' },
    dbShowCenterAna: { cn: '节目集中度分析', en: 'dbShowCenterAna' },
    dbShowTypeAna: { cn: '节目类型分析', en: 'dbShowTypeAna' },
    dbShowTypeUserAna: { cn: '用户分析', en: 'dbShowTypeUserAna' },
    dbShowTypeTimeUseAna: { cn: '点播时长分析', en: 'dbShowTypeTimeUseAna' },
    dbShowsOrder: { cn: '节目排名分析', en: 'dbShowsOrder' },
    dbMovieOrder: { cn: '电影榜单', en: 'dbMovieOrder' },
    dbTVPlayOrder: { cn: '电视剧榜单', en: 'dbTVPlayOrder' },
  }
}

//字段信息 - 包括表头和指标
export const FIELDS = {
  日期: {en:'date', cn: '日期', unit: ''},
  业务类别: {en:'bizType', cn: '业务类别', unit: ''},
  频道类型: {en:'channelType', cn: '频道类型', unit: ''},
  频道名称: {en:'channelName', cn: '频道名称', unit: ''},
  节目类型: {en:'showType', cn: '节目类型', unit: ''},
  节目名称: {en:'showName', cn: '节目名称', unit: ''},
  电影名称: {en:'showName', cn: '电影名称', unit: ''},
  电视剧名称: {en:'showName', cn: '电视剧名称', unit: ''},
  TOP分组: {en:'topGroup', cn: 'TOP分组', unit: ''},
  播出时间: {en:'dateTime', cn: '播出时间', unit: ''},
  排名: {en:'uid', cn: '排名', unit: ''},
  用户数: {en:'userNum', cn: '用户数', unit: '户'},
  流入用户数: {en:'newUserNum', cn: '流入用户数', unit: '户'},
  流出用户数: {en:'lostUserNum', cn: '流出用户数', unit: '户'},
  覆盖用户数: {en:'coverUserNum', cn: '覆盖用户数', unit: '户'},
  用户流动率: {en:'userGrowRatio', cn: '用户流动率', unit: '%'},
  覆盖率: {en:'coverRatio', cn: '覆盖率', unit: '%'},
  市占率: {en:'marketRatio', cn: '市占率', unit: '%'},
  节目比重: {en:'showRatio', cn: '节目比重', unit: '%'},
  使用时长: {en:'useTime', cn: '使用时长', unit: '分钟'},
  户均使用时长: {en:'useTimeAVG', cn: '户均使用时长', unit: '分钟'},
  点播时长: {en:'useTime', cn: '点播时长', unit: '分钟'},
  户均点播时长: {en:'useTimeAVG', cn: '户均点播时长', unit: '分钟'},
  单次点播时长: {en:'requestOne', cn: '单次点播时长', unit: '分钟'},
  点播次数: {en:'requestTimes', cn: '点播次数', unit: '次'},
  户均点播次数: {en:'requestAVG', cn: '户均点播次数', unit: '次'},
  用户指数: {en:'userIndex', cn: '用户指数', unit: ''},
}

//一些其他约定
export const CONVENTION = {
  NEED_ENCODE_PREFIX: 'NEED_ENCODE_PREFIX', //传参数是如果有中文需要ENCODE一下
}

export const CHANNELS = ['CCTV-1', 'CCTV-1高清', 'CCTV-2', 'CCTV-2高清', 'CCTV-3', 'CCTV-3高清', 'CCTV-4', 'CCTV-5',
  'CCTV-5高清', 'CCTV-6', 'CCTV-6高清', 'CCTV-7', 'CCTV-7高清', 'CCTV-8', 'CCTV-8高清', 'CCTV-9', 'CCTV-9高清',
  'CCTV-10', 'CCTV-10高清', 'CCTV-11', 'CCTV-12', 'CCTV-12高清', 'CCTV-NEWS', 'CCTV-少儿', 'CCTV-少儿高清',
  'CCTV-新闻', 'CCTV-音乐', 'CETV-1', '上海炫动卡通', '上海纪实', '上海纪实高清', '世界地理', '东方卫视', '东方卫视高清',
  '东方财经', '云南卫视', '优漫卡通', '兵团卫视', '内蒙古卫视', '凤凰卫视', '劲爆体育', '劲爆体育HD', '北京卫视', '北京卫视高清',
  '北京纪实', '北京纪实高清', '卡酷少儿', '发现之旅', '吉林卫视', '四川卫视', '国防军事', '天津卫视', '天津卫视高清', '宁夏卫视',
  '安徽卫视', '安徽卫视高清', '山东卫视', '山东卫视高清', '广东卫视', '广东卫视高清', '广西卫视', '新疆卫视', '新科动漫',
  '旅游卫视', '江苏卫视', '江苏卫视高清', '江西卫视', '河北卫视', '河南卫视', '浙江卫视', '浙江卫视高清', '深圳卫视',
  '深圳卫视高清', '湖北卫视', '湖北卫视高清', '湖南卫视', '湖南卫视高清', '甘肃卫视', '电视指南', '福建卫视', '第一剧场',
  '西藏卫视', '贵州卫视', '辽宁卫视', '辽宁卫视高清', '重庆卫视', '陕西卫视', '青海卫视', '风云足球', '风云音乐', '风尚购物',
  '高尔夫', '高清探索', '黑龙江卫视', '黑龙江卫视高清',]
