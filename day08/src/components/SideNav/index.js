/**
 * Created by liekkas on 16/3/21.
 */
import React, { PropTypes } from 'react'
import { Menu, Icon } from 'antd'
//import FaAngleRight from 'react-icons/lib/fa/angle-right'
import _ from 'lodash'
const SubMenu = Menu.SubMenu;
import { browserHistory } from 'react-router'

const styles = {
  root: {
    width: '14%',
    position: 'fixed',
    height: '100%',
    marginTop: '10px',
    backgroundColor: '#2f333c',
  },
  img: {
    verticalAlign: 'middle',
//    marginTop: '10px',
    marginRight: '10px',
  },
  menuName: {
    verticalAlign: 'middle',
  },
  icon: {
//    lineHeight: '12px',
    fontSize: '16px',
    verticalAlign: 'middle',
  }
}

class SideNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openKeys: [props.data[0].key],
      selectedMenu: props.selectedMenu,
    }
  }

  handleClick(e) {
    this.setState({
      selectedMenu: e.key,
//      openKeys: e.keyPath.slice(1),
    })

    browserHistory.push('/' + e.key)
//    this.props.onSubModuleChange(e)
  }

  onToggle(v) {
    if (v.open) {
      this.setState({openKeys: _.concat(this.state.openKeys, v.keyPath)})
    } else {
      this.setState({openKeys: _.difference(this.state.openKeys, v.keyPath)})
    }
  }

  componentWillReceiveProps(nextProps) {
    if ( nextProps.data[0].key !== this.props.data[0].key ) {
      this.setState({openKeys: [nextProps.data[0].key]})
    }
  }

  render() {
    const { data } = this.props
    const { selectedMenu } = this.state
    return (
      <div style={styles.root}>
        <Menu onClick={(e) => this.handleClick(e)} theme='dark'
              openKeys={this.state.openKeys}
              onOpen={(v) => this.onToggle(v)}
              onClose={(v) => this.onToggle(v)}
              selectedKeys={[selectedMenu]}
              mode='inline'>
          {
            data.map(({name, key, subMenus, icons}, index) =>
            subMenus.length > 0
              ? <SubMenu key={key} title={
                  <span><img style={styles.img}
                    src={ _.map(subMenus,'key').indexOf(selectedMenu) > -1 ? icons[1] : icons[0] } />
                        <span style={styles.menuName}>{name}</span>
                  </span>}>
                  {
                    subMenus.map(({name,key}, index) =>
                      <Menu.Item key={key}>
                        <Icon type='right' />

                        <span style={styles.menuName}>{name}</span>
                      </Menu.Item>
                    )
                  }
                </SubMenu>
              : <Menu.Item key={key}>
                  <img style={styles.img} src={ selectedMenu === key ? icons[1] : icons[0]} />
                  <span style={styles.menuName}>{name}</span>
                </Menu.Item>
            )
          }
        </Menu>
      </div>
    )
  }
}

SideNav.propTypes = {
  data: PropTypes.array.isRequired,
  selectedMenu: PropTypes.string.isRequired,
  onSubModuleChange: PropTypes.func
}

export default SideNav

//<FaAngleRight style={styles.icon}/>
