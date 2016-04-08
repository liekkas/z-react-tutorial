/**
 * Created by liekkas on 16/4/8.
 */
import React, { PropTypes } from 'react'
import styles from '../styles.scss'
class TVUserOverview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 'bar',
    }
  }

  render() {
    const { foo } = this.props
    return (
      <div className={styles.moduleContent}>
        {foo}
        <div>sssss</div>
      </div>
    )
  }
}

TVUserOverview.propTypes = {
  foo: PropTypes.string.isRequired,
}
TVUserOverview.defaultProps = {
  foo: 'bar',
}

export default TVUserOverview
