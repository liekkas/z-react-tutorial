/**
 * Created by liekkas on 16/4/11.
 */
import React, { PropTypes } from 'react'
import { DatePicker, TimePicker, Select } from 'antd'
import dateFormat from 'dateFormat'
import Condition from './Condition'
import _ from 'lodash'
const MonthPicker = DatePicker.MonthPicker

const styles = {
  root: {
    display: 'flex',
    color: '#E2E3E4',
    marginRight: '10px',
  }
}

function newArray(start, end) {
  let result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledMinutes() {
  return newArray(0, 60).filter(value => value % 30 !== 0);
}

class ByTime extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dateType: props.dateType,
      start: props.start,
      end: props.end,
    }
  }

  handleDateTypeChange(value) {
    switch (value) {
      case 'M':
        this.setState({start: new Date(2015,4), end: new Date(2015,9)})
        break
      case 'W':
        this.setState({start: '201518', end: '201544'})
        break
      case 'D':
        this.setState({start: new Date(2015,4,1), end: new Date(2015,9,31)})
        break
      case 'T':
        this.setState({start: new Date(2015,4,1)})
        break
    }
    this.setState({dateType: value})
  }

  disabledStartDate(start) {
    if (!start || !this.state.end) {
      return false;
    }
    return (start.getTime() >= this.state.end.getTime()
    || start.getTime() < new Date(2015,4,1).getTime())
  }

  disabledEndDate(end) {
    if (!end || !this.state.start) {
      return false;
    }
    return (end.getTime() <= this.state.start.getTime()
    || end.getTime() >= new Date(2015,10,1).getTime())
  }

  onStartChange(v) {
    this.setState({start: v})
  }

  onEndChange(v) {
    this.setState({end: v})
  }

  renderMore() {
    switch (this.state.dateType) {
      case 'D':
        return this.renderByDay()
      case 'M':
        return this.renderByMonth()
      case 'T':
        return this.renderByHour()
    }
  }

  renderByHour() {
     if (this.props.rangeMode) {
       return <div>
         <DatePicker disabledDate={(v) => this.disabledStartDate(v)}
                     value={this.state.start}
                     placeholder="开始日期"
                     onChange={(v) => this.onStartChange(v)} />
         &nbsp;&nbsp;
         <label>(呈现24时数据)</label>
         &nbsp;&nbsp;
       </div>
     } else {
       return <div>
         <DatePicker disabledDate={(v) => this.disabledStartDate(v)}
                     value={this.state.start}
                     placeholder="开始日期"
                     onChange={(v) => this.onStartChange(v)} />
         &nbsp;&nbsp;
         <TimePicker defaultValue="00:00" disabledMinutes={disabledMinutes}
                     format="HH:mm" hideDisabledOptions />
       </div>
     }
  }

  renderByMonth() {
    if (this.props.rangeMode) {
      return <div>
        <MonthPicker disabledDate={(v) => this.disabledStartDate(v)}
                    value={this.state.start}
                    placeholder="开始日期"
                    onChange={(v) => this.onStartChange(v)} />
        <label>&nbsp;&nbsp;至&nbsp;&nbsp;</label>
        <MonthPicker disabledDate={(v) => this.disabledEndDate(v)}
                    value={this.state.end}
                    placeholder="结束日期"
                    onChange={(v) => this.onEndChange(v)} />
      </div>
    } else {
      return <MonthPicker disabledDate={(v) => this.disabledStartDate(v)}
                         value={this.state.start}
                         placeholder="开始日期"
                         onChange={(v) => this.onStartChange(v)} />
    }
  }

  renderByDay() {
    if (this.props.rangeMode) {
      return <div>
        <DatePicker disabledDate={(v) => this.disabledStartDate(v)}
                    value={this.state.start}
                    placeholder="开始日期"
                    onChange={(v) => this.onStartChange(v)} />
        <label>&nbsp;&nbsp;至&nbsp;&nbsp;</label>
        <DatePicker disabledDate={(v) => this.disabledEndDate(v)}
                    value={this.state.end}
                    placeholder="结束日期"
                    onChange={(v) => this.onEndChange(v)} />
      </div>
    } else {
      return <DatePicker disabledDate={(v) => this.disabledStartDate(v)}
                         value={this.state.start}
                         placeholder="开始日期"
                         onChange={(v) => this.onStartChange(v)} />
    }
  }

  getValue() {
    let base = { dateType: this.state.dateType }
    switch (this.state.dateType) {
      case 'D':
        base.start = dateFormat(this.state.start,'yyyymmdd')
        if (this.props.rangeMode) {
          base.end = dateFormat(this.state.end,'yyyymmdd')
        }
        break
      case 'M':
        base.start = dateFormat(this.state.start,'yyyymm')
        if (this.props.rangeMode) {
          base.end = dateFormat(this.state.end,'yyyymm')
        }
        break
      case 'T':
        base.start = dateFormat(this.state.start,'yyyymmdd') + '-0'
        if (this.props.rangeMode) {
          base.end = dateFormat(this.state.start,'yyyymmdd') + '-23'
        }
        break
    }
    return base
  }

  render() {
    const { showHour } = this.props

    let conditions = [
      {cn: '按日', en: 'D'},
//      {cn: '按周', en: 'W'},
      {cn: '按月', en: 'M'},
    ]
    if (showHour) {
      conditions.push({cn: '按时', en: 'T'})
    }

    return (
      <div style={styles.root}>
        <Condition label="时间分类" options={conditions}
                   onConditionChange={v => this.handleDateTypeChange(v)}/>
        {this.renderMore()}
      </div>

    )
  }
}

ByTime.propTypes = {
  dateType: PropTypes.string.isRequired,
//  start: PropTypes.string.isRequired,
//  end: PropTypes.string.isRequired,
  start: PropTypes.object.isRequired,
  end: PropTypes.object.isRequired,
  showHour: PropTypes.bool.isRequired,
  rangeMode: PropTypes.bool.isRequired,
}

ByTime.defaultProps = {
  dateType: 'D',  //默认按日呈现
  start: new Date(2015,4,1),
  end: new Date(2015,9,31),
//  start: '20150501',
//  end: '20151031',
  showHour: false,
  rangeMode: true,
}

export default ByTime
