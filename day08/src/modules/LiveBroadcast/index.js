/**
 * Created by liekkas on 16/4/8.
 */
import React, { PropTypes } from 'react'
import { SideNav } from '../../components'
import styles from '../styles.scss'
import { Menus } from '../../constants/Consts'

class LiveBroadcast extends React.Component {
  render() {
    const { module } = this.props
    return (
      <div className={styles.moduleRoot}>
        <SideNav data={Menus[module]} />
        { this.props.children }
      </div>
    )
  }
}

LiveBroadcast.propTypes = {
  module: PropTypes.string.isRequired,
}
LiveBroadcast.defaultProps = {
  module: 'liveBroadcast',
}

export default LiveBroadcast
