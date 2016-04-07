/**
 * Created by liekkas on 16/4/7.
 */
import React, { PropTypes } from 'react'
import Panel from './Panel'
import styles from './compStyle'
import { Icon } from 'antd'
import { USER_DEVELOPMENT_KPIS } from '../constants/Kpis'

class UserDevelopmentKpi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 'bar',
    }
  }

  render() {
    const { foo } = this.props
    return (
      <div style={styles.userDevelop.root}>
        <div style={styles.titleStyle}>用户发展关键指标</div>
        {
          USER_DEVELOPMENT_KPIS.map(({cn}, index) =>
            <div key={index} style={styles.userDevelop.kpi}>
              <div style={index !== 2 ? styles.userDevelop.kpiTitle : styles.userDevelop.kpiTitleGreen}><Icon type='user' />{cn}</div>
              <div style={index !== 2 ? styles.userDevelop.kpiContent : styles.userDevelop.kpiContentGreen}>
                <div>
                  新增值: &nbsp;<b>{index !== 2 ? 8575 : -2820}</b>&nbsp;<Icon type={index !== 2 ? 'arrow-up' : 'arrow-down'}  />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  新增环比: &nbsp;<b>{index !== 2 ? '97.33%' : '-23.33%'}</b>&nbsp;<Icon type={index !== 2 ? 'arrow-up' : 'arrow-down'} />
                </div>
                <div>
                  净增值: &nbsp;<b>{index !== 2 ? 6720 : -1032}</b>&nbsp;<Icon type={index !== 2 ? 'arrow-up' : 'arrow-down'} />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  净增环比: &nbsp;<b>{index !== 2 ? '89.33%' : '-16.33%'}</b>&nbsp;<Icon type={index !== 2 ? 'arrow-up' : 'arrow-down'} />
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

UserDevelopmentKpi.propTypes = {
  foo: PropTypes.string.isRequired,
}
UserDevelopmentKpi.defaultProps = {
  foo: 'bar',
}

export default UserDevelopmentKpi
