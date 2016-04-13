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
      option: props.defaultOption
        ? props.defaultOption
        : typeof(props.options[0]) === 'object'
            ? props.options[0].en
            : props.options[0],
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
    const { label, options, width, showSearch, defaultOption } = this.props

    const p = {
      showSearch,
      defaultValue: this.state.option,
      style: { width },
      placeholder: '请选择',
      searchPlaceholder: '请输入关键词',
      optionFilterProp: 'children',
      notFoundContent: '无法找到',
    }

    return (
      <div style={styles.root}>
        {
          label !== '' ? <label style={styles.label}>{label} &nbsp;&nbsp;</label> : null
        }
        <Select {...p} onChange={(v) => this.handleChange(v)}>
          {
            typeof(options[0]) === 'object'
              ? options.map(({cn, en}, index) =>
                  <Option value={en} key={index}>{cn}</Option>
                )
              : options.map((name, index) =>
                  <Option value={name} key={index}>{name}</Option>
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
  defaultOption: PropTypes.string,
  width: PropTypes.number,
  showSearch: PropTypes.bool,
}

Condition.defaultProps = {
  label: '',
  options: [],
  defaultOption: null,
  width: 100,
  showSearch: false,
}

export default Condition
