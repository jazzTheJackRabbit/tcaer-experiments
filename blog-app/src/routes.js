import React from 'react';
import {Route, IndexRoute} from 'react-router'
import App from './components/app'
import PostsIndex from './components/posts_index'
import PostCreate from './components/post_create'
import PostShow from './components/post_show'

export default (
	<Route path="/" component={App} >
		<IndexRoute component={PostsIndex} />
		<Route path="create" component={PostCreate} />
		<Route path="show/:id" component={PostShow} />
	</Route>
	
)