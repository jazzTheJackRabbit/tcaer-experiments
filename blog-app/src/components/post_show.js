import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchPost, deletePost} from '../actions/index'

class PostShow extends React.Component{
	static contextTypes = {
		router : React.PropTypes.object
	}

	componentDidMount() {
		this.props.fetchPost(this.props.params.id)
	}

	deletePost(){
		this.props.deletePost(this.props.params.id)
			.then(() => {
				this.context.router.push('/')
			})
	}

	render(){				
		var html= ""
		if(this.props.activePost != null){
			var post = this.props.activePost.data
			html = (
					<div key={post.id} className="ui item">
						<div className="ui text container segment">
							<button className='ui right ribbon red label'
								onClick={this.deletePost.bind(this)}>
					    		Delete
					    	</button>
							<div className="content">								
								<div className="header">{post.title}</div>
								<div className="meta">
									<span className="black">{post.categories}</span>
								</div>
								<div className="description">
									<p>{post.content}</p>
								</div>								
					    	</div>
					    </div>
					</div>
				)
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

var mapStateToProps = function(state){	
	return({
		activePost: state.activePost
	})
}


export default connect(mapStateToProps, {fetchPost, deletePost})(PostShow)