/**
 * Created by liekkas on 16/3/31.
 */
import React, { PropTypes } from 'react'
import useCssModuleSassStyle from './other/style.scss'
import useCssModuleLessStyle from './other/style.less'
import useCssModuleCssStyle from './other/style.css'

//styles下面的不采用css module,用于存放第三方库的样式
import pureSassStyle from './styles/style.scss'
import pureLessStyle from './styles/style.less'
import pureCssStyle from './styles/style.css'

//素材加载
import my from './other/my.json'
import plus from './other/plus.png'
import tiny from './other/tiny.jpg'

import classNames from 'classnames/bind'

//如果有需要把两者结合需要使用classnames的bind函数
const cx = classNames.bind(useCssModuleLessStyle);
const finalStyle = cx('color','ff','fz',useCssModuleLessStyle.fw)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 'bar',
    }
  }

  render() {
    const { foo } = this.props
    return (
      <div className={finalStyle}>
        <img src={plus} alt=""/>
        <img src={tiny} alt=""/>
        {foo} change... {my.name}
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
