/**
 * Created by liekkas on 16/4/8.
 */
import React, { PropTypes } from 'react'
import ECharts from 're-echarts'
import Radio from 'antd/lib/radio'
const RadioGroup = Radio.Group
const RadioButton = Radio.Button
import { getSingleOption, getMultiOption, getOrderOption, getPieOption, getRadarOption } from '../../tools/service'
import { Menus } from '../../constants/Consts'

const styles = {
  root: {
    position: 'relative',
    backgroundColor: '#242930',
    marginBottom: '15px',
    height: '400px',
  },
  kpiGroup: {
    position: 'absolute',
    top: '10px',
    left: '10px',
  },
}

function parseTableData(v,kpi,config) {
//  console.log('>>> Chart:parseTableData',kpi)
  if (_.isEmpty(v)) return {}

  let labels //坐标轴文字
  if (config.legends && config.legends.length > 0) {
    const dataArr = []
    const legendField = config.legendField
    for (let i = 0; i < config.legends.length; i ++) {
      const filterArr = _.filter(v,{ [legendField]: config.legends[i] })
      if (i == 0) {
        labels = _.map(filterArr, config.labelField)
      }
      dataArr.push(_.map(filterArr,kpi.en))
    }
    return getMultiOption(labels,dataArr,config.legends,kpi.unit,kpi.cn)
  } else {
    const data = _.map(v,kpi.en);
    if (_.isEmpty(data)) {
      console.log('>>> 后台数据字段和前台对不上,字段为:',kpi.en)
      return {}
    }

    labels = _.map(v,(config.labelField))
    //根据不同的模块,使用不同的图表
    switch (config.module) {
      case Menus.mapping.lbChannelOrder.en:
      case Menus.mapping.lbShowsOrder.en:
      case Menus.mapping.dbMovieOrder.en:
      case Menus.mapping.dbTVPlayOrder.en:
        let datas = []
        for (let i = 0; i < v.length; i++) {
          datas.push({
            value: v[i][kpi.en],
            rank: v[i].uid,
          })
        }
        return getOrderOption(labels,datas,kpi.unit,kpi.cn)
    }
    return getSingleOption(labels,data,kpi.unit,kpi.cn)
  }
}

class KpiChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentKpi: props.kpis[0],
      option: parseTableData(this.props.tableData, props.kpis[0], this.props.config),
    }
  }

  onKpiChange(e) {
    const kpi = _.find(this.props.kpis, {en: e.target.value})
    this.setState({currentKpi: kpi, option: parseTableData(this.props.tableData, kpi, this.props.config)})
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(nextProps.tableData,this.props.tableData)) {
      this.setState({
        option: parseTableData(nextProps.tableData, this.state.currentKpi, nextProps.config)
      })
    }
  }

  render() {
    const { kpis } = this.props
    const { currentKpi } = this.state

    return (
      <div style={styles.root}>
        <ECharts option={this.state.option} notMerge />
        <div style={styles.kpiGroup}>
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

KpiChart.propTypes = {
  kpis: PropTypes.array.isRequired,
  subModule: PropTypes.string.isRequired,
  tableData: PropTypes.array,
  config: PropTypes.object,
}

export default KpiChart
