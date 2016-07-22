import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import CoreLayout from 'layouts/CoreLayout'

class AppContainer extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render () {
    const { store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <CoreLayout/>
        </div>
      </Provider>
    )
  }
}

export default AppContainer
