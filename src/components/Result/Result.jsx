import React, {Component} from 'react'

class Result extends Component{
	constructor(props){
		super(props)
		this.state = {
			raw : this.props,
			formatted : [],
		}
	}

	componentDidMount(){

	}

	render(){
		console.log(this.props.children)
		const {children} =this.props
		console.log(children)
		return(
			<ul>
				
			</ul>

		)
	}


}









/*
const Result = ({name, surname}) => {
	console.log(name)
	return(
		<p>{name} {surname}</p>

		{this.props.children.map((i) => <li key={i}>{i}</li>)}
	)
}
*/
export default Result