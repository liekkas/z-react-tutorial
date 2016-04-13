/**
 * Created by liekkas on 16/3/5.
 */
import React, { PropTypes } from 'react'
import ByTime from './conditions/ByTime'
import ByRegion from './conditions/ByRegion'
import ByChannelType from './conditions/ByChannelType'
import ByChannelTypeEx from './conditions/ByChannelTypeEx'
import ByChannelCompare from './conditions/ByChannelCompare'
import ByShowType from './conditions/ByShowType'
import ByTopGroup from './conditions/ByTopGroup'

import { Button, Icon } from 'antd'
import { Menus, CONVENTION } from '../../constants/Consts'

const SubModules = Menus.mapping

const styles = {
  root: {
//    height: '90px',
    marginBottom: '15px',
    backgroundColor: '#242930',
  },
  content: {
    padding: '10px 20px 10px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  titleStyle: {
    width: '100%',
    height: '35px',
    padding: '5px',
    fontSize: '14px',
    color: '#E2E3E4',
    backgroundColor: '#242930',
  },
  btn: {
    height: '80%',
  }
}

class SearchBox extends React.Component {

  handleSearch() {
    //时间类值
    let base = this.refs.time.getValue()
    //附加条件的值
    switch (this.props.param.subModule) {
      case SubModules.lbChannelOrder.en:
        base.type = this.refs.channelType.getValue()
        break
      case SubModules.lbChannelAna.en:
        const v = this.refs.channelCompare.getValue()
        base[CONVENTION.NEED_ENCODE_PREFIX+'channel1'] = v.channel1
        base[CONVENTION.NEED_ENCODE_PREFIX+'channel2'] = v.channel2
        break
      case SubModules.lbShowsOrder.en:
        Object.assign(base, this.refs.channelTypeEx.getValue())
        break
      case SubModules.dbShowCenterAna.en:
        base.showType = this.refs.showType.getValue()
        base.groupType = this.refs.topGroup.getValue()
        break
    }
    this.props.onSearch(base)
  }

  renderAttachCondition() {
    switch (this.props.param.subModule) {
      case SubModules.lbChannelOrder.en:
        return <ByChannelType ref="channelType"/>
      case SubModules.lbChannelAna.en:
        return <ByChannelCompare ref="channelCompare"/>
      case SubModules.lbShowsOrder.en:
        return <ByChannelTypeEx ref="channelTypeEx"/>
      case SubModules.dbShowCenterAna.en:
        return <div style={{display: 'flex'}}>
                  <ByShowType ref="showType"/>
                  <ByTopGroup ref="topGroup"/>
                </div>
    }
  }

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.titleStyle}>筛选条件</div>
        <div style={styles.content}>
          <ByTime ref="time"
                  showHour={this.props.param.showHour}
                  rangeMode={this.props.param.rangeMode} />
          <ByRegion />
          { this.renderAttachCondition() }
          <Button style={styles.btn} type="primary" onClick={() => this.handleSearch()}>
            <Icon type="search" />
            查询
          </Button>
        </div>
      </div>

    )
  }
}

SearchBox.propTypes = {
  param: PropTypes.object.isRequired,
  onSearch: PropTypes.func.isRequired,
}

SearchBox.defaultProps = {
  param: {
    dateType: 'D',
    start: '20150501',
    end: '20151031',
    showHour: true,
    rangeMode: true,
    subModule: 'tvOverview',
  },
}

export default SearchBox
