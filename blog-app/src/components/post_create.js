import React from 'react'
import {reduxForm as reduxFormConnect} from 'redux-form'
import {createPost} from '../actions/index'
import {Link} from 'react-router'

class PostCreate extends React.Component{
	render(){
		const {fields: {title, content, categories}} = this.props
		return(
			<form className="ui form" onSubmit={this.props.handleSubmit(this.props.createPost)}>
				<h4 className="ui header">Create a new post</h4>
				
				<div className="field">
					<label>Title</label>
					<div className="field">
						<input type="text" name="title" placeholder="A great post about..." {...title}/>
					</div>
					{
						title.touched ? (<div className= {title.error ? "ui negative message" : ""}>
							<div name="title-help">{title.error}</div>
						</div>) : ""
					}
				</div>

				<div className="field">
					<label>Categories</label>
					<div className="field">
						<input type="text" name="categories" placeholder="Politics..." {...categories}/>
					</div>
						{
							categories.touched ? (<div className={categories.error ? "ui negative message" : ""}>
							<div name="categories-help">{categories.error}</div>
						</div>) : ""}
				</div>

				<div className="field">
					<label>Title</label>
					<div className="field">
						<textarea name="content" placeholder="This post is about..." {...content}></textarea>
					</div>
						{ content.touched ? (<div className={content.error ? "ui negative message" : ""}>
							<div name="content-help">{content.error}</div>
						</div>) : ""}
				</div>

				<button className="ui green button">
					Create
				</button>

				<Link className="ui red button" to="/">
					Cancel
				</Link>
			</form>
		)
	}
}

function validate(values){
	const errors = {}
	if(!values.title){
		errors.title = "Title cannot be empty"
	}
	if(!values.categories){
		errors.categories = "Categories cannot be empty"
	}
	if(!values.content){
		errors.content = "Content cannot be empty"
	}
	return errors
}

// Will connect the component state to redux form state 
// very similar to connect, 2nd argument to reduxFormConnect is mapStateToProps and 3rd argument is mapDispatchToProps
export default reduxFormConnect({
	form: 'CreatePostForm',
	fields: ['title', 'categories', 'content'],
	validate: validate
}, null, {createPost})(PostCreate)