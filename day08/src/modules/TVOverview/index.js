/**
 * Created by liekkas on 16/4/8.
 */
import React, { PropTypes } from 'react'
import { SideNav } from '../../components'
import styles from '../styles.scss'
import { Menus } from '../../constants/Consts'

class TVOverview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      module: 'bar',
    }
  }

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

TVOverview.propTypes = {
  module: PropTypes.string.isRequired,
}
TVOverview.defaultProps = {
  module: 'tvOverview',
}

export default TVOverview
