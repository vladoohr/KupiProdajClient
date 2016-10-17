import React from 'react'
import { Route, IndexRoute } from 'react-router'

// import components
import App from './components/app' 
import Advertisement from './components/advertisements'
import NewАdvertisement from './components/new_advertisement' 
import Help from './components/help' 
import NotFound from './components/not_found'

export default (
	<Route path='/' component={App}>
		<IndexRoute component={Advertisement} />
		<Route path='new' component={NewАdvertisement} />
		<Route path='help' component={Help} />
		<Route path='*' component={NotFound} />
	</Route>
)