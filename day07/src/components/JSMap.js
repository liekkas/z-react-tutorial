/**
 * Created by liekkas on 16/4/7.
 */
import React, { PropTypes } from 'react'
import jiangsu from './jiangsu.json'
import echarts from 'echarts'
import ECharts from 're-echarts'
import styles from './compStyle'
import { mockMapData } from '../tools/mock'

echarts.registerMap('jiangsu', jiangsu)

class JSMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 'bar',
    }
  }

  render() {
    const { foo } = this.props
    return (
      <div style={styles.map.root}>
        <div style={styles.titleStyle}>GIS地图展示</div>
        <ECharts option={mockMapData()}/>
      </div>
    )
  }
}

JSMap.propTypes = {
  foo: PropTypes.string.isRequired,
}
JSMap.defaultProps = {
  foo: 'bar',
}

export default JSMap
