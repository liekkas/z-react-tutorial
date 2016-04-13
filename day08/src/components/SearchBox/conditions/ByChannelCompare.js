/**
 * Created by liekkas on 16/4/12.
 */
import React, { PropTypes } from 'react'
import Condition from './Condition'
import { CHANNELS } from '../../../constants/Consts'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
  }
}

class ByChannelCompare extends React.Component {
  getValue() {
    return {
      channel1: this.refs.condition1.getValue(),
      channel2: this.refs.condition2.getValue(),
    }
  }

  render() {
    const p = {
      options: CHANNELS,
      width: 130,
      showSearch: true,
    }
    return (
      <div style={styles.root}>
        <Condition ref="condition1" label="频道名称" {...p} />
        <Condition ref="condition2" label="对比频道名称" defaultOption="湖南卫视" {...p} />
      </div>
    )
  }
}

export default ByChannelCompare
