/**
 * Created by liekkas on 16/4/7.
 */

/**
 * 用户发展关键指标
 */
export const USER_DEVELOPMENT_KPIS = [
  {cn: '数字有效用户数'},
  {cn: '互动有效用户数'},
  {cn: '宽带有效用户数'},
  {cn: '高清互动用户数'},
  {cn: '云媒体业务用户数'},
]

/**
 * 业务收入关键指标
 */
export const BIZ_KPIS = [
  {en:'digitalBasic', cn: '数字基本业务收入', unit: '元'},
  {en:'interactionBasic', cn: '互动基本业务收入', unit: '元'},
  {en:'interactionDemand', cn: '互动点播业务收入', unit: '元'},
  {en:'cloudMedia', cn: '云媒体业务收入', unit: '元'},
  {en:'incomeGrowthRatio', cn: '业务收入增长率', unit: '%'},
]

/**
 * 云媒体指标
 */
export const CLOUD_KPIS = [
  {cn: '云媒体业务新增订购数', en: 'kpi1', unit: ''},
  {cn: '云媒体业务新增用户数', en: 'kpi2', unit: ''},
  {cn: '云媒体业务退订数', en: 'kpi3', unit: ''},
  {cn: '云媒体业务退订用户数', en: 'kpi4', unit: ''},
  {cn: '云媒体业务累计订购数', en: 'kpi5', unit: ''},
  {cn: '云媒体业务累计用户数', en: 'kpi6', unit: ''},
  {cn: '云媒体业务净增订购数', en: 'kpi7', unit: ''},
  {cn: '云媒体业务订购占比', en: 'kpi8', unit: '%'},
  {cn: '云媒体业务渗透率', en: 'kpi9', unit: '%'},
  {cn: '云媒体业务退订率', en: 'kpi10', unit: '%'},
]

/**
 * 重要套餐指标
 */
export function GET_IMPORTANT_SET_KPIS() {
  let result = []
  for (let i = 1; i <= 50; i++) {
    result.push({
      cn: '套餐' + i,
      en: 'set' + i
    })
  }
  return result
}
