/**
 * Created by liekkas on 16/4/7.
 */
import React, { PropTypes } from 'react'
import { Table } from 'antd'
import styles from './compStyle'
import { CLOUD_KPIS } from '../constants/Kpis'

const columns = [{
  title: '指标名称',
  dataIndex: 'name'
}, {
  title: '指标值',
  dataIndex: 'value'
}, {
  title: '同比',
  dataIndex: 'tb',
  render(text) {
    return text + '%';
  }
}, {
  title: '环比',
  dataIndex: 'hb',
  render(text) {
    return text + '%';
  }
}]

let data = []
CLOUD_KPIS.map(({cn,unit}, index) =>
  data.push({
    key: index,
    name: cn,
    value: unit === '%' ? _.random(60,200) : _.random(100000,200000),
    tb: _.random(60,200),
    hb: _.random(60,200),
  })
)

class CloudMedia extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 'bar',
    }
  }

  render() {
    const { foo } = this.props
    return (
      <div style={styles.cloud.root}>
        <div style={styles.titleStyle}>云媒体发展关键指标</div>
        <Table columns={columns} dataSource={data} size='small' pagination={false}/>

      </div>
    )
  }
}

CloudMedia.propTypes = {
  foo: PropTypes.string.isRequired,
}
CloudMedia.defaultProps = {
  foo: 'bar',
}

export default CloudMedia
