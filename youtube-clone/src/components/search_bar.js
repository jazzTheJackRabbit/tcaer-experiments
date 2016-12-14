import React, {Component} from 'react'

class SearchBar extends Component{
	// Inherited from JS
	constructor(props){
		super(props);
		this.state = {term: ''}
	}

	// Inherited from React
	handleSearchTermUpdate(event){
		this.setState({'term': event.target.value})
		this.props.searchTermUpdateHandler(event.target.value)
	}

	render(){
		return (
			<div className="search-bar">
				<input 
					value={this.state.term}
					onChange={event => this.handleSearchTermUpdate(event)}
				/>
			</div>
		)
	}
}

export default SearchBar