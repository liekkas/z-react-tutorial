/**
 * Created by liekkas on 16/3/7.
 */
import React, { PropTypes } from 'react'
import { Table, Pagination } from 'antd'
import _ from 'lodash'
import shallowCompare from 'react-addons-shallow-compare'

const styles = {
  root: {
    position: 'relative',
    backgroundColor: '#242930',
    marginBottom: '15px',
//    height: '400px',
  },
  titleStyle: {
    width: '100%',
    height: '35px',
    padding: '5px',
    fontSize: '14px',
//    color: '#f0ad4e',
    color: '#E2E3E4',
    backgroundColor: '#242930',
  },
  table: {
    margin: '10px 20px 0px',
  },
  pagination: {
    marginTop: '10px',
    right: '10px',
    float: 'right',
  }
}

class DataGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pageSize: props.pageSize,
      current: 1,
      sorter: {},
    }
  }

  //pageSize改变,重新回到第一页
  onShowSizeChange(current, pageSize) {
//    console.log('Current: ', current, '; PageSize: ', pageSize);
    this.setState({ pageSize, current: 1 })
  }

  onChange(current) {
    this.setState({ current })
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (shallowCompare(this, nextProps, nextState)) {
      this.setState({pageSize:10, current:1})
    }
  }

  showTotal(total) {
    return `共 ${total} 条`;
  }

  onTableChange(pagination, filters, sorter) {
    // 点击分页、筛选、排序时触发
//    console.log('各类参数是', pagination, filters, sorter);
    this.setState({sorter})
  }

  render() {
    const { columns, datas, title } = this.props
    const { pageSize, current, sorter } = this.state

    let parareDatas = datas
    if (sorter.hasOwnProperty('field')) {
      parareDatas = _.orderBy(datas, [sorter.field], [sorter.order === 'descend' ? 'desc' : 'asc']);
    }

    const start = (current - 1) * pageSize
    const end = Math.min(current * pageSize, parareDatas.length)
    let renderData = []
    for (let i = start; i < end; i++) {
      renderData.push(parareDatas[i])
    }

    return (
      <div style={styles.root}>
        <div style={styles.titleStyle}>{title} - 列表</div>
        <Table dataSource={renderData} onChange={(a,b,c) => this.onTableChange(a,b,c)}
               useFixedHeader={true} rowKey={item => item.uid}
               columns={columns} size="middle"
               style={styles.table} pagination={false}/>
        <div style={styles.pagination}>
          <Pagination showSizeChanger showQuickJumper showTotal={(a) => this.showTotal(a)}
                      current={current}
                      onChange={(v) => this.onChange(v)} pageSizeOptions={['10','20','30','40']}
                      onShowSizeChange={(a,b) => this.onShowSizeChange(a,b)}
                      defaultPageSize={this.props.pageSize}
                      defaultCurrent={1} total={datas.length} />
        </div>
      </div>
    )
  }
}

DataGrid.propTypes = {
  columns: PropTypes.array.isRequired,
  datas: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}
DataGrid.defaultProps = {
  columns: [],
  datas: [],
  pageSize: 10
}

export default DataGrid
//  ['7','10','24','30']
// rowKey={item => item.date}
