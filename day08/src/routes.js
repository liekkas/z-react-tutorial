/**
 * Created by liekkas on 16/4/5.
 */
import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import App from './App'
import Home from './modules/Home'
import NotFound from './modules/NotFound'
import TVOverview from './modules/TVOverview'
import LiveBroadcast from './modules/LiveBroadcast'
import DemandBroadcast from './modules/DemandBroadcast'
import * as SUB_MODULES from './modules'

export default () => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path="tvOverview" component={TVOverview}>
        <IndexRoute component={SUB_MODULES.TVUserOverview}/>
        <Route path='/tvUserOverview' component={SUB_MODULES.TVUserOverview} />
        <Route path='/tvUserBehave' component={SUB_MODULES.TVUserBehave} />
        <Route path='/tvBusinessOverview' component={SUB_MODULES.TVBusinessOverview} />
      </Route>
      <Route path="liveBroadcast" component={LiveBroadcast}>
        <IndexRoute component={SUB_MODULES.LBUserOverview} />
        <Route path='/lbUserOverview' component={SUB_MODULES.LBUserOverview} />
        <Route path='/lbUserBehave' component={SUB_MODULES.LBUserBehave} />
        <Route path='/lbcgUserAna' component={SUB_MODULES.LBCGUserAna} />
        <Route path='/lbcgTimeUseAna' component={SUB_MODULES.LBCGTimeUseAna} />
        <Route path='/lbChannelOrder' component={SUB_MODULES.LBChannelOrder} />
        <Route path='/lbChannelAna' component={SUB_MODULES.LBChannelAna} />
        <Route path='/lbShowsOrder' component={SUB_MODULES.LBShowsOrder} />
      </Route>
      <Route path="demandBroadcast" component={DemandBroadcast}>
        <IndexRoute component={SUB_MODULES.DBUserOverview} />
        <Route path='/dbUserOverview' component={SUB_MODULES.DBUserOverview} />
        <Route path='/dbUserBehave' component={SUB_MODULES.DBUserBehave} />
        <Route path='/dbResAvailAna' component={SUB_MODULES.DBResAvailAna} />
        <Route path='/dbShowCenterAna' component={SUB_MODULES.DBShowCenterAna} />
        <Route path='/dbShowTypeUserAna' component={SUB_MODULES.DBShowTypeUserAna} />
        <Route path='/dbShowTypeTimeUseAna' component={SUB_MODULES.DBShowTypeTimeUseAna} />
        <Route path='/dbMovieOrder' component={SUB_MODULES.DBMovieOrder} />
        <Route path='/dbTVPlayOrder' component={SUB_MODULES.DBTVPlayOrder} />
      </Route>
      <Route path='*' component={NotFound} status={404} />
    </Route>
  </Router>
)
