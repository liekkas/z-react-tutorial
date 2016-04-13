/**
 * Created by liekkas on 16/4/12.
 */
import React, { PropTypes } from 'react'
import Condition from './Condition'

const conditions = [
  {cn: '全部', en: '0'},
  {cn: '央视', en: '1'},
  {cn: '卫视', en: '2'},
]

class ByChannelType extends React.Component {
  getValue() {
    return this.refs.condition.getValue()
  }

  render() {
    return (
      <Condition ref="condition" label="频道分类" options={conditions} />
    )
  }
}

export default ByChannelType
