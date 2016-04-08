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

export const Modules = {
  MODULE1_EN: 'home',
  MODULE1_CN: '首页',
  MODULE2_EN: 'tvOverview',
  MODULE2_CN: '电视概况',
  MODULE3_EN: 'liveBroadcast',
  MODULE3_CN: '直播业务',
  MODULE4_EN: 'demandBroadcast',
  MODULE4_CN: '点播业务',
}

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
      name: '媒资概况分析', key: 'mediaAssets', subMenus: [
      { name: '资源利用率分析', key: 'maResAvailAna' },
      { name: '节目集中度分析', key: 'maShowCenterAna' },
    ],
      icons: [MenuIcons.mediaAsset1, MenuIcons.mediaAsset2],
    },
    {
      name: '节目类型分析', key: 'showTypeAna', subMenus: [
      { name: '用户分析', key: 'stUserAna' },
      { name: '点播时长分析', key: 'stTimeUseAna' },
    ],
      icons: [MenuIcons.showType1, MenuIcons.showType2],
    },
    {
      name: '节目排名分析', key: 'dbShowsOrder', subMenus: [
      { name: '电影榜单', key: 'movieOrder' },
      { name: '电视剧榜单', key: 'tvPlayOrder' },
    ],
      icons: [MenuIcons.showOrder1, MenuIcons.showOrder2],
    },
  ],
  mapping: {
    tvUserOverview: { cn: '用户概况', en: 'tvUserOverview' },
    tvUserBehave: { cn: '用户行为', en: 'tvUserBehave' },
    tvBusinessOverview: { cn: '全业务概况', en: 'tvBusinessOverview' },
    lbUserAna: { cn: '直播用户分析', en: 'lbUserAna' },
    lbUserOverview: { cn: '直播用户概况', en: 'lbUserOverview' },
    lbUserBehave: { cn: '直播用户行为', en: 'lbUserBehave' },
    lbChannelGroup: { cn: '直播频道组分析', en: 'lbChannelGroup' },
    lbcgUserAna: { cn: '用户分析', en: 'lbcgUserAna' },
    lbcgTimeUseAna: { cn: '使用时长分析', en: 'lbcgTimeUseAna' },
    lbChannelOrder: { cn: '直播频道排名', en: 'lbChannelOrder' },
    lbChannelAna: { cn: '直播频道分析', en: 'lbChannelAna' },
    lbShowsOrder: { cn: '直播节目排名', en: 'lbShowsOrder' },
    dbUserAna: { cn: '点播用户分析', en: 'dbUserAna' },
    dbUserOverview: { cn: '点播用户概况', en: 'dbUserOverview' },
    dbUserBehave: { cn: '点播用户行为', en: 'dbUserBehave' },
    mediaAssets: { cn: '媒资概况分析', en: 'mediaAssets' },
    maResAvailAna: { cn: '资源利用率分析', en: 'maResAvailAna' },
    maShowCenterAna: { cn: '节目集中度分析', en: 'maShowCenterAna' },
    showTypeAna: { cn: '节目类型分析', en: 'showTypeAna' },
    stUserAna: { cn: '用户分析', en: 'stUserAna' },
    stTimeUseAna: { cn: '点播时长分析', en: 'stTimeUseAna' },
    dbShowsOrder: { cn: '节目排名分析', en: 'dbShowsOrder' },
    movieOrder: { cn: '电影榜单', en: 'movieOrder' },
    tvPlayOrder: { cn: '电视剧榜单', en: 'tvPlayOrder' },
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
  播出时间: {en:'broadcastTime', cn: '播出时间', unit: ''},
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

