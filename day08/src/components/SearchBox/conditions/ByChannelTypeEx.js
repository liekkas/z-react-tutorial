/**
 * Created by liekkas on 16/4/12.
 */
import React, { PropTypes } from 'react'
import Condition from './Condition'
import { CHANNELS } from '../../../constants/Consts'

const conditions = [
  {cn: '全部', en: '0'},
  {cn: '央视', en: '1'},
  {cn: '卫视', en: '2'},
  {cn: '具体频道', en: '3'},
]

const styles = {
  root: {
    display: 'flex',
  }
}

class ByChannelType extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      option: '0',
    }
  }

  getValue() {
    return {
      type: this.refs.condition.getValue(),
      channel: this.refs.channels ? this.refs.channels.getValue() : '',
    }
  }

  render() {
    return (
      <div style={styles.root}>
        <Condition ref="condition" label="频道分类" options={conditions}
                   onConditionChange={(v) => this.setState({option: v})}/>
        {
          this.state.option === '3'
            ? <Condition ref="channels" options={CHANNELS} width={130} showSearch/>
            : null
        }
      </div>
    )
  }
}

export default ByChannelType
