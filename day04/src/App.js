/**
 * Created by liekkas on 16/3/31.
 */
import React, { PropTypes } from 'react'
import { Table } from 'antd'

const columns = [{
  title: '流水ID',
  dataIndex: 'alarmID',
}, {
  title: '告警标题',
  dataIndex: 'title',
}, {
  title: '告警发生时间',
  dataIndex: 'time',
}, {
  title: '告警级别',
  dataIndex: 'level',
}, {
  title: '告警标注',
  dataIndex: 'remark',
}, {
  title: '网元类型',
  dataIndex: 'neType',
}, {
  title: '网元名称',
  dataIndex: 'neName',
}, {
  title: '网元ID',
  dataIndex: 'neId',
}, {
  title: '厂商',
  dataIndex: 'vendor',
}, {
  title: '归属地市',
  dataIndex: 'region',
}, {
  title: '是否派单',
  dataIndex: 'ticket',
}]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    const bind = this
    setInterval(function () {
      const newData = [...bind.state.data]
      for (let i = 0; i < 100; i ++) {
        let nv = {key: newData.length + i + 1}
        columns.forEach(function (column) {
          nv[column.dataIndex] = column.title + (newData.length + i + 1)
        })
        newData.unshift(nv)
      }

       bind.setState({
         data: newData,
       })
    }, 50)
  }

  render() {
    return (
      <div style={{ padding: 20 }}>
        <Table columns={columns} dataSource={this.state.data} loading={this.state.loading} />
      </div>
    )
  }
}

App.propTypes = {
  foo: PropTypes.string.isRequired,
}
App.defaultProps = {
  foo: 'bar',
}

export default App
