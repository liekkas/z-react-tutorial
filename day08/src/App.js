/**
 * Created by liekkas on 16/3/31.
 */
import React from 'react'
import { Link } from 'react-router'
import { Header, Footer } from './components'

const styles = {
  root: {
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    height: '100%',
    paddingTop: '5vh',
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      module: 'home',
    }
  }

  render() {
    return (
      <div style={styles.root}>
        <Header module={this.state.module}
                moduleChange={(name) => this.setState({ module: name })}/>
        <div style={styles.content}>
          { this.props.children }
        </div>
        {
          this.state.module !== 'home'
            ? <Footer text='© 2016 All Rights Reserved 版权所有'/>
            : null
        }
      </div>
    )
  }
}

export default App
