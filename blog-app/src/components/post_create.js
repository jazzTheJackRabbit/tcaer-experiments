import React from 'react'

class PostCreate extends React.Component{
	render(){
		return(
			<form className="ui form">
				<h4 className="ui header">Create a new post</h4>
				
				<div className="field">
					<label>Title</label>
					<div className="field">
						<input type="text" name="title" placeholder="A great post about..." />
					</div>
				</div>

				<div className="field">
					<label>Category</label>
					<div className="field">
						<input type="text" name="category" placeholder="Politics..." />
					</div>
				</div>

				<div className="field">
					<label>Title</label>
					<div className="field">
						<textarea name="content" placeholder="This post is about..."></textarea>
					</div>
				</div>
			</form>
		)
	}
}

export default PostCreate