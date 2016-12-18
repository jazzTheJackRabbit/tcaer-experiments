import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Sparklines, SparklinesLine} from 'react-sparklines'

class LineChart extends Component{	
	render(){
		return(
			<Sparklines data={this.props.data} svgHeight={100} svgWidth={300} preserveAspectRatio={true}>
				<SparklinesLine color={this.props.color}/>
			</Sparklines>
		)
	}
}

export default LineChart
