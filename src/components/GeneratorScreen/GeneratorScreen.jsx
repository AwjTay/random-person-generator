import React, { Component } from "react"
import countries from "../../data/countries.json"

class GeneratorScreen extends Component {

	constructor(props){
		super(props)
		this.state = {
			nationality : "random",
			gender : "random",
			ageRequested : false,
			emailRequested : false,
			dobRequested : false,

		}
		this.handleNationalityChange = this.handleNationalityChange.bind(this);
		this.handleGenderChange = this.handleGenderChange.bind(this);
		this.handleOptionsChange = this.handleOptionsChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleNationalityChange(e) {	
    	this.setState({ nationality: e.currentTarget.value });
 	 }

 	 handleGenderChange(e) {	
    	this.setState({ gender: e.currentTarget.value });
 	 }

	handleOptionsChange(e) {
		switch (e.currentTarget.id) {
			case "age" : 
			this.setState({ ageRequested : !this.state.ageRequested })
			break;
			case "email" : 
			this.setState({ emailRequested : !this.state.emailRequested })
			break;
			case "dob" : 
			this.setState({ dobRequested : !this.state.dobRequested })
			break;
			default :
			return null;
		}
	}
	//tracing the state of the dobReq boolean

	handleSubmit(e){
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	render(){
		return(
			<React.Fragment>
				<form>
					<div className="form_structure">
						<label htmlFor="nationality" >Select Nationality</label>
						<select id="nationality" onChange={ this.handleNationalityChange }>
							{ countries.map((item, i) => (
			            		<option value={ item.name } key={i}>{ item.name }</option>
				          	))}
						</select>
					</div>
					<div className="form_structure">
						<label htmlFor="nationality">Select Gender</label>
						<select id="gender" onChange={ this.handleGenderChange }>	
							<option value="random">Random</option>				
			            	<option value="female">Female</option>
			            	<option value="male">Male</option>
						</select>
					</div>
					<label htmlFor="additional_info">Optional Infomation</label>
					<div id="additional_info" className="form_structure">	
						<label htmlFor="age">Age</label>
						<input onChange={this.handleOptionsChange} type="checkbox" id="age"  />
						<label htmlFor="email">Email</label>
						<input onChange={this.handleOptionsChange} type="checkbox" id="email"  />
						<label htmlFor="dob">DOB</label>
						<input onChange={this.handleOptionsChange} type="checkbox" id="dob" />
					</div>

					<button onClick={ this.handleSubmit }>Generate</button>

				</form>
			</React.Fragment>
		)
	}
}

export default GeneratorScreen