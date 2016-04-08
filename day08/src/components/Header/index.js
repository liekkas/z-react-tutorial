import React, { PropTypes } from 'react'
import { IndexLink, Link ,browserHistory } from 'react-router'
import style from './style.scss'
const datas = [
  { name: '首页', key: 'home' },
  { name: '模块A', key: 'moduleA' },
  { name: '概况', key: 'tvOverview' },
]

class Header extends React.Component {

  onClick(name) {
    console.log('>>> Header.onClick',name)
    this.props.moduleChange(name)
  }

  render() {
    return (
      <div className={style.root}>
        <ui className={style.menu}>
          {
            datas.map(({name, key}, index) =>
              <li key={index} className={
                key.indexOf(this.props.module) > -1 ? style.active : null }>
                {
                  key === 'home'
                  ? <IndexLink to='/' onClick={() => this.onClick('home')}>{name}</IndexLink>
                  : <Link to={'/' + key} onClick={() => this.onClick(key)}>{name}</Link>
                }
              </li>
            )
          }
        </ui>
      </div>
    )
  }
}

Header.propTypes = {
  module: PropTypes.string.isRequired,
  moduleChange: PropTypes.func,
}
Header.defaultProps = {
  module: 'home',
}

export default Header
