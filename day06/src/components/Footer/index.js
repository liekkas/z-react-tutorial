/**
 * Created by liekkas on 16/2/26.
 */
import React, { PropTypes } from 'react'
import style from './styles.scss'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'bar',
    }
  }

  render() {
    const { text, showBG } = this.props
    return (
      <div className={style.root} style={{
        backgroundColor: showBG ? '#1F222A' : 'rgba(0,0,0,0)'
      }}>
        {text}
      </div>
    )
  }
}

Footer.propTypes = {
  text: PropTypes.string.isRequired,
  showBG: PropTypes.bool.isRequired,
}
Footer.defaultProps = {
  text: 'bar',
  showBG: true
}

export default Footer
