/**
 * Created by liekkas on 16/4/11.
 */
import React, { PropTypes } from 'react'
import { Select, Button, Icon } from 'antd'

const styles = {
  root: {
    marginRight: '10px',
  },
  label: {
    color: '#E2E3E4',
  }
}

class Condition extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      option: props.options[0].en,
    }
  }

  handleChange(value) {
    this.setState({option: value})
    this.props.onConditionChange(value)
  }

  getValue() {
    return this.state.option
  }

  render() {
    const { label, options, width } = this.props
    return (
      <div style={styles.root}>
        <label style={styles.label}>{label}:&nbsp;&nbsp;</label>
        <Select defaultValue={this.state.option}
                style={{ width }}
                placeholder="请选择地区"
                searchPlaceholder="输入关键词"
                onChange={(v) => this.handleChange(v)}>
          {
            options.map(({cn, en}, index) =>
              <Option value={en} key={index}>{cn}</Option>
            )
          }
        </Select>
      </div>
    )
  }
}

Condition.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onConditionChange: PropTypes.func,
  width: PropTypes.number,
}

Condition.defaultProps = {
  label: '未分类',
  options: [],
  width: 100,
}

export default Condition
