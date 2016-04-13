/**
 * Created by liekkas on 16/4/13.
 */

import React, { PropTypes } from 'react'
import styles from './styles.scss'
import { DataGrid, KpiChart, DBShowCenterChart, SearchBox } from '../components'
import { fetchData, getInitInfo } from './helper'
import { Menus } from '../constants/Consts'

let MODULE, INIT_INFO

/**
 * 内容模板
 */
class ContentTemplate extends React.Component {
  constructor(props) {
    super(props)

    MODULE = Menus.mapping[props.subModule]
    INIT_INFO = getInitInfo(MODULE.en)

    this.state = {
      result: {}, //后台获取的结果值
    }
  }

  componentDidMount() {
    fetchData(this,MODULE.en,INIT_INFO.restParam)
  }

  onSearch(v) {
    fetchData(this,MODULE.en,v)
  }

  render() {
    const { result } = this.state
    return (
      <div className={styles.moduleContent}>
        <SearchBox param={INIT_INFO.searchParam}
                   onSearch={(v) => this.onSearch(v)}/>

        {
          this.props.subModule !== Menus.mapping.dbShowCenterAna.en
            ? <KpiChart subModule={MODULE.en}
                        kpis={INIT_INFO.kpis}
                        tableData={result.data}
                        config={result.config} />
            : <DBShowCenterChart tableData={result.data} />
        }

        <DataGrid title={MODULE.cn}
                  columns={INIT_INFO.columns}
                  datas={result.data} />
      </div>
    )
  }
}

ContentTemplate.propTypes = {
  subModule: PropTypes.string.isRequired,
}

export default ContentTemplate
