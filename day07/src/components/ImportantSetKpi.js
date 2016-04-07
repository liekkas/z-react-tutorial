/**
 * Created by liekkas on 16/4/7.
 */
import React, { PropTypes } from 'react'
import ECharts from 're-echarts'
import Panel from './Panel'
import { getMultiOption } from '../tools/mock'
import _ from 'lodash'
import styles from './compStyle'
import { GET_IMPORTANT_SET_KPIS } from '../constants/Kpis'

/**
 * 重要套餐关键指标模块
 */

const mockData = [
]

GET_IMPORTANT_SET_KPIS().map( v =>
  mockData.push({
    label: v.cn,
    order: _.random(10000,60000),
    growth: _.random(5000,10000),
  })
)

class ImportantSetKpi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      option: getMultiOption(_.map(mockData,'label'),
        [_.map(mockData,'order'),_.map(mockData,'growth')],
        ['预订量', '增长量'], '', ''),
    }
  }

  render() {
    return (
      <div style={styles.important.root}>
        <div style={styles.titleStyle}>重要套餐关键指标</div>
        <ECharts option={this.state.option}/>
      </div>
    )
  }
}

ImportantSetKpi.propTypes = {
}

export default ImportantSetKpi
