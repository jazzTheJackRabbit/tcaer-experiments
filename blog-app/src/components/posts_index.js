import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchPosts} from '../actions/index'
import {Link} from 'react-router'

class PostsIndex extends React.Component{
	componentDidMount() {
		this.props.fetchPosts()
	}
	render(){				
		var html= ""
		if(this.props.posts != null){
			html = this.props.posts.data.map(post => {
				return(
					<Link key={post.id} className="ui item" to={"/show/" + post.id}>
						<div className="ui text container segment">
							<div className="content">
								<div className="header">{post.title}</div>
								<div className="meta">
									<span className="black">{post.categories}</span>
								</div>								
								<div className="description">
								</div>
					    	</div>					    	
					    </div>
					</Link>
				)
			})
		}
		return(
			<div className="ui grid">
				<div className="sixteen wide column">
					<div className="ui items">
						{html}
					</div>
				</div>
			</div>
		)
	}
}

var mapDispatchToProps = function(dispatch){
	return bindActionCreators({
		fetchPosts: fetchPosts
	},dispatch)
}

var mapStateToProps = function(state){	
	return({
		posts: state.posts,
		activePost: null
	})
}


export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex)