import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchPosts} from '../actions/index'

class PostsIndex extends React.Component{
	componentDidMount() {
		this.props.fetchPosts()
	}
	render(){				
		var html= ""
		if(this.props.posts != null){
			html = this.props.posts.data.map(post => {
				return(
					<div key={post.id} className="ui item">
						<div className="ui text container segment">
							<div className="content">
								<div className="header">{post.title}</div>
								<div className="meta">
									<span className="ui italics">{post.categories}</span>
								</div>
								<div className="description">
								<p></p>
								</div>
					    	</div>
					    </div>
					</div>
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
		posts: state.posts
	})
}


export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex)