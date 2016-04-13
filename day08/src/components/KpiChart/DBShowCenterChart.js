/**
 * Created by liekkas on 16/4/13.
 */
import React, { PropTypes } from 'react'
import ECharts from 're-echarts'
import { getPieOption, getRadarOption } from '../../tools/service'
import { FIELDS } from '../../constants/Consts'

const styles = {
  root: {
    position: 'relative',
    backgroundColor: '#242930',
    marginBottom: '15px',
    height: '400px',
    display: 'flex',
  },
}

function parseTableData(v,kpi,type) {
  if (_.isEmpty(v)) return {}

  const labels = _.map(v, FIELDS.TOP分组.en)
  const data = _.map(v,kpi.en)
  if (_.isEmpty(data)) {
    console.log('>>> 后台数据字段和前台对不上,字段为:',kpi.en)
    return {}
  }

  return type === 0 ? getPieOption(labels,data) : getRadarOption(labels,data)
}

/**
 * 点播中节目集中度分析图表和其他e不一致,需要单独处理
 */
class DBShowCenterChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pieOption: parseTableData(this.props.tableData, FIELDS.点播时长, 0),
      radarOption: parseTableData(this.props.tableData, FIELDS.市占率, 1),
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(nextProps.tableData,this.props.tableData)) {
      this.setState({
        pieOption: parseTableData(nextProps.tableData, FIELDS.点播时长, 0),
        radarOption: parseTableData(nextProps.tableData, FIELDS.市占率, 1),
      })
    }
  }

  render() {
    return (
      <div style={styles.root}>
        <ECharts option={this.state.pieOption} />
        <ECharts option={this.state.radarOption} />
      </div>
    )
  }
}

DBShowCenterChart.propTypes = {
  tableData: PropTypes.array,
}

export default DBShowCenterChart
