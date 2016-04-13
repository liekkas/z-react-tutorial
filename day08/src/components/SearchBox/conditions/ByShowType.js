/**
 * Created by liekkas on 16/4/12.
 */
import React, { PropTypes } from 'react'
import Condition from './Condition'

const conditions = [
  {cn: '电影', en: '1'},
  {cn: '电视剧', en: '2'},
]

class ByShowType extends React.Component {
  getValue() {
    return this.refs.condition.getValue()
  }

  render() {
    return (
      <Condition ref="condition" label="节目分类" options={conditions} />
    )
  }
}

export default ByShowType
