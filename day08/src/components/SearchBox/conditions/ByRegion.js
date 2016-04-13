/**
 * Created by liekkas on 16/3/7.
 */
import React, { PropTypes } from 'react'
import Condition from './Condition'

const conditions = [{cn: '全部', en: 'all'}]

class ByRegion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      regionName: props.regionName,
    }
  }

  handleChange(value) {
    this.setState({regionName: value})
    this.props.onRegionChange(value)
  }

  render() {
    return (
      <Condition label="地区分类" options={conditions} />
    )
  }
}

ByRegion.propTypes = {
  regionName: PropTypes.string.isRequired,
  onRegionChange: PropTypes.func,
}
ByRegion.defaultProps = {
  regionName: '全部',
}

export default ByRegion
