/**
 * Created by liekkas on 16/4/8.
 */
import React, { PropTypes } from 'react'
import ECharts from 're-echarts'

class KpiChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 'bar',
    }
  }

  render() {
    const { foo } = this.props
    return (
      <div>
        {foo}
      </div>
    )
  }
}

KpiChart.propTypes = {
  kpis: PropTypes.array.isRequired,
}

export default KpiChart
