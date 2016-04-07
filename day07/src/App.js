/**
 * Created by liekkas on 16/3/31.
 */
import React from 'react'
import UserDevelopmentKpi from './components/UserDevelopmentKpi'
import BizIncomeKpi from './components/BizIncomeKpi'
import ImportantSetKpi from './components/ImportantSetKpi'
import CloudMedia from './components/CloudMedia'
import JSMap from './components/JSMap'
import { BIZ_KPIS } from './constants/Kpis'

const styles = {
  root: {
    height: '100%',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',

  },
  left: {
    width: '30%',
    height: '100%',
//    marginLeft: '2%',
  },
  right: {
    width: '69%',
    height: '100%',
  },
  rightBottom: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  }
}

class App extends React.Component {
  render() {
    return (
      <div style={styles.root}>
        <div style={styles.left}>
          <UserDevelopmentKpi />
          <CloudMedia />
        </div>
        <div style={styles.right}>
          <BizIncomeKpi kpis={BIZ_KPIS}/>
          <div style={styles.rightBottom}>
            <JSMap />
            <ImportantSetKpi />
          </div>
        </div>
      </div>
    )
  }
}

export default App
