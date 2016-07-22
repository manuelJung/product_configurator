import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import createStore from './store/createStore'
import AppContainer from './containers/AppContainer'



// ========================================================
// Store and History Instantiation
// ========================================================
// Create redux store and sync with react-router-redux. We have installed the
// react-router-redux reducer under the routerKey "router" in src/routes/index.js,
// so we need to provide a custom `selectLocationState` to inform
// react-router-redux of its location.
const initialState = window.___INITIAL_STATE__
const store = createStore(initialState)

// ========================================================
// Developer Tools Setup
// ========================================================
if (__DEBUG__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open()
  }
}

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {

  ReactDOM.render(
    <AppContainer
      store={store}
    />,
    MOUNT_NODE
  )
}

// Enable HMR and catch runtime errors in RedBox
// This code is excluded from production bundle
if (__DEV__ && module.hot) {
  const renderApp = render
  const renderError = (error) => {
    const RedBox = require('redbox-react').default

    ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
  }
  render = () => {
    try {
      renderApp(Math.random())
    } catch (error) {
      renderError(error)
    }
  }
}

// ========================================================
// Go!
// ========================================================
render()
