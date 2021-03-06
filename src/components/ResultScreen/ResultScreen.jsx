import React, { Component } from 'react'
import { personFormatter } from "../../data/formatFunctions.js"
import { CSSTransition } from "react-transition-group"

class ResultScreen extends Component{
	constructor(props){
		super(props)
	}

	render(){

		return(
			<React.Fragment>
				<div className="result_container">
					<h3 className="component_header">People</h3>

					{ this.props.historyArray.length === 0 ?
						<h5><a href="https://github.com/AwjTay">https://github.com/AwjTay</a></h5> : 

						<ul className="person_list" style={{listStyle : "none"}}>

							{this.props.historyArray.map((person, i) => {
								const formattedPerson = personFormatter(person)

								return(

									<li key={i}>
																		
											<table className="table">
										        
										        <tbody>
											        { formattedPerson.map((detail, i) => (

												        	<CSSTransition
												        		in={true}
												        		appear={true}
												        		timeout={600}
												        		classNames="fade"
												        	>

													            <tr key={i}>
													                <th scope="row"></th>
													                <td>{  	
													                		detail
													                	}
													                </td>      
													            </tr>
												            </CSSTransition>							           	

											        ))}  
										        </tbody>

										    </table>
										
									</li>
									
								)
							})
							}

						</ul>
					}
				</div>

			</React.Fragment>
		)
	}


}

export default ResultScreen
