/**
 * Created by liekkas on 16/3/31.
 */
import React, { PropTypes } from 'react'
import { DatePicker } from 'antd'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 'bar',
    }
  }

  render() {
    const { foo } = this.props
    return (
      <div>
        {foo} change...
        <DatePicker />
      </div>
    )
  }
}

App.propTypes = {
  foo: PropTypes.string.isRequired,
}
App.defaultProps = {
  foo: 'bar',
}

export default App
