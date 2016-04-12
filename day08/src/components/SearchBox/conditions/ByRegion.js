/**
 * Created by liekkas on 16/3/7.
 */
import React, { PropTypes } from 'react'
import Condition from './Condition'

const conditions = [{cn: '全部', en: 'all'}]
const styles = {
  root: {
    margin: '0 8px 0',
  },
  label: {
    marginRight: '10px',
    color: '#E2E3E4',
  }
}
//const datas = ['全部','江苏省','湖北省','安徽省','湖南省','河北省','山东省','河南省']
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
    const { foo } = this.props
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
