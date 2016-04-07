/**
 * Created by liekkas on 16/4/7.
 */
import React, { PropTypes } from 'react'
import ECharts from 're-echarts'
import Panel from './Panel'
import Radio from 'antd/lib/radio'
const RadioGroup = Radio.Group
const RadioButton = Radio.Button
import { getSingleOption } from '../tools/mock'
import _ from 'lodash'
import styles from './compStyle'

/**
 * 业务收入关键指标模块
 */

const mockData = [
//  {label: '20160229', digitalBasic: 7527862.47, interactionBasic: 503817.11, interactionDemand: 38214.07, cloudMedia: 940608.52, incomeGrowthRatio: 26.4},
//  {label: '20160301', digitalBasic: 7105463.1, interactionBasic: 480410.43, interactionDemand: 196938.65, cloudMedia: 1167796.19, incomeGrowthRatio: 34.4},
//  {label: '20160302', digitalBasic: 7063684.12, interactionBasic: 471539.78, interactionDemand: 31833.72, cloudMedia: 714442.88, incomeGrowthRatio: 23.4},
//  {label: '20160303', digitalBasic: 7101196.45, interactionBasic: 453723.9, interactionDemand: 32317.41, cloudMedia: 753811.83, incomeGrowthRatio: 18.4},
//  {label: '20160304', digitalBasic: 7096835.41, interactionBasic: 471320.3, interactionDemand: 35489.06, cloudMedia: 780318.73, incomeGrowthRatio: 24.4},
]

_.range(1,10).map( v =>
  mockData.push({
    label: '2016030' + v,
    digitalBasic: _.random(7000000,8000000),
    interactionBasic: _.random(400000,600000),
    interactionDemand: _.random(100000,400000),
    cloudMedia: _.random(700000,1200000),
    incomeGrowthRatio: _.random(10,50),
  })
)

class BizIncomeKpi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentKpi: props.kpis[0],
      option: getSingleOption(_.map(mockData,'label'), _.map(mockData,props.kpis[0].en), props.kpis[0].unit, props.kpis[0].cn),
    }
  }

  onKpiChange(e) {
    const kpi = _.find(this.props.kpis, {en: e.target.value})
    this.setState({currentKpi: kpi, option: getSingleOption(_.map(mockData,'label'), _.map(mockData,kpi.en), kpi.unit, kpi.cn)})
  }

  render() {
    const { kpis } = this.props
    const { currentKpi } = this.state

    return (
      <div style={styles.biz.root}>
        <div style={styles.titleStyle}>业务收入关键指标</div>
        <ECharts option={this.state.option}/>
        <div style={styles.biz.kpiGroup}>
          <RadioGroup onChange={(e) => this.onKpiChange(e)} theme='dark'
                      value={currentKpi.en}>
            {
              kpis.map(({en, cn}, index) =>
                <RadioButton key={index} value={en}>{cn}</RadioButton>)
            }
          </RadioGroup>
        </div>
      </div>
    )
  }
}

BizIncomeKpi.propTypes = {
  kpis: PropTypes.array.isRequired,
}

export default BizIncomeKpi
