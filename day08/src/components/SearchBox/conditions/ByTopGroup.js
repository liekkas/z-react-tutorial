/**
 * Created by liekkas on 16/4/12.
 */
import React, { PropTypes } from 'react'
import Condition from './Condition'

const conditions = [
  {cn: 'TOP10', en: '10'},
]

class ByTopGroup extends React.Component {
  getValue() {
    return this.refs.condition.getValue()
  }

  render() {
    return (
      <Condition ref="condition" label="TOP分组" options={conditions} />
    )
  }
}

export default ByTopGroup
