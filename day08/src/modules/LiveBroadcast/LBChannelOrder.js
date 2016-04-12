/**
 * Created by liekkas on 16/4/8.
 */
import React, { PropTypes } from 'react'
import styles from '../styles.scss'
import { DataGrid, KpiChart, SearchBox } from '../../components'
import { fetchData, getInitInfo } from '../helper'
import { Menus } from '../../constants/Consts'

const MODULE = Menus.mapping.lbChannelOrder
const INIT_INFO = getInitInfo(MODULE.en)

class LBChannelOrder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: {}, //后台获取的结果值
    }
  }

  componentDidMount() {
    fetchData(this,MODULE.en,INIT_INFO.restParam)
  }

  onSearch(v) {
    console.log(v)
    fetchData(this,MODULE.en,v)
  }

  render() {
    const { result } = this.state
    return (
      <div className={styles.moduleContent}>
        <SearchBox param={INIT_INFO.searchParam}
                   onSearch={(v) => this.onSearch(v)}/>

        <KpiChart subModule={MODULE.en}
                  kpis={INIT_INFO.kpis}
                  tableData={result.data}
                  config={result.config} />

        <DataGrid title={MODULE.cn}
                  columns={INIT_INFO.columns}
                  datas={result.data} />
      </div>
    )
  }
}

export default LBChannelOrder
