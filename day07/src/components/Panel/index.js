/**
 * Created by liekkas on 16/2/23.
 */
import React, { PropTypes } from 'react'
import _ from 'lodash'

class Panel extends React.Component {
  render() {
    const { title, width, height } = this.props

    let rootStyle = {
      width,
      height,
      marginBottom: '15px',
      marginRight: '15px',
      boxSizing: 'border-box',
//      border: '1px solid rgba(188,189,190,1)',
      backgroundColor: '#242930',
    }

    if (this.props.hasOwnProperty('style')) {
      rootStyle = _.merge(rootStyle, this.props.style)
    }

    const contentStyle = {
      width,
      height: title !== '' ? (height - 35) + 'px' : height + 'px',
    }

    const titleStyle = {
      width: '100%',
      height: '35px',
      padding: '0.5% 1% 0.5%',
      fontSize: '14px',
      color: '#E2E3E4',
      backgroundColor: '#242930',
    }

    return (
      <div {...this.props} style={rootStyle}>
        { title !== '' ? <div style={titleStyle}>{title}</div> : null }
        <div style={contentStyle}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
}

Panel.defaultProps = {
  title: '',
  width: '100%',
  height: 100,
}

export default Panel
