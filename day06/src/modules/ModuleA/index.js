/**
 * Created by liekkas on 16/4/6.
 */
import React, { PropTypes } from 'react'
import { Table, Pagination, Menu, Icon, Switch } from 'antd'
import { mockTableColumns, mockTableData } from '../../tools/mockData'

const SubMenu = Menu.SubMenu

const styles = {
  root: {
    width: '100%',
    height: '90vh',
    padding: '20px',
    paddingTop: '5vh',
    display: 'flex',
    flexDirection: 'row',
  },
  menu: {
    width: '15vw',
  },
  table: {
    marginLeft: '2vw',
    width: '80vw',
  }
}

class ModuleA extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: '1',
      columns: mockTableColumns('1'),
      data: mockTableData('1'),
    }
  }

  handleClick(e) {
    console.log('click ', e)
    this.setState({
      current: e.key,
      columns: mockTableColumns(e.key),
      data: mockTableData(e.key),
    })
  }

  render() {
    return (
      <div style={styles.root}>
        <Menu onClick={(e) => this.handleClick(e)}
              style={styles.menu}
              defaultOpenKeys={['sub1']}
              selectedKeys={[this.state.current]}
              mode='inline'>
          <SubMenu key='sub1' title={<span><Icon type='mail' /><span>导航一</span></span>}>
            <Menu.Item key='1'>选项1</Menu.Item>
            <Menu.Item key='2'>选项2</Menu.Item>
            <Menu.Item key='3'>选项3</Menu.Item>
            <Menu.Item key='4'>选项4</Menu.Item>
          </SubMenu>
          <SubMenu key='sub2' title={<span><Icon type='appstore' /><span>导航二</span></span>}>
            <Menu.Item key='5'>选项5</Menu.Item>
            <Menu.Item key='6'>选项6</Menu.Item>
            <Menu.Item key='7'>选项7</Menu.Item>
            <Menu.Item key='8'>选项8</Menu.Item>
          </SubMenu>
          <SubMenu key='sub4' title={<span><Icon type='setting' /><span>导航三</span></span>}>
            <Menu.Item key='9'>选项9</Menu.Item>
            <Menu.Item key='10'>选项10</Menu.Item>
            <Menu.Item key='11'>选项11</Menu.Item>
            <Menu.Item key='12'>选项12</Menu.Item>
          </SubMenu>
        </Menu>
        <Table dataSource={this.state.data}
               useFixedHeader={true} rowKey={item => item.uid}
               columns={this.state.columns}
               style={styles.table}/>
      </div>

    )
  }
}

ModuleA.propTypes = {
}

export default ModuleA
