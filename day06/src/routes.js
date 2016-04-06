/**
 * Created by liekkas on 16/4/5.
 */
import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import App from './App'
import Home from './modules/Home'
import ModuleA from './modules/ModuleA'
import NotFound from './modules/NotFound'

export default () => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/moduleA' component={ModuleA} />
      <Route path='*' component={NotFound} status={404} />
    </Route>
  </Router>
)
