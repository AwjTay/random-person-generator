import React, { Component } from 'react'
import { personFormatter } from "../../data/formatFunctions.js"

class ResultScreen extends Component{
	constructor(props){
		super(props)
	}

	render(){

		return(
			<React.Fragment>
				<div className="result_container">

					<ul className="person_list" style={{listStyle : "none"}}>

						{this.props.historyArray.map((person, i) => {

							const formattedPerson = personFormatter(person)

							return(
							
								<li key={i}>

									{
										<table className="table">
									        
									        <tbody>
									        { formattedPerson.map((detail, i) => (
									        	
									            <tr key={i}>
									                <th scope="row"></th>
									                <td>{
									                	detail ? detail : null
									                	}
									                </td>      
									            </tr>
									            ))}  
									        </tbody>
									    </table>
									}

								</li>)}
							)
						}

					</ul>
				</div>

			</React.Fragment>
		)
	}


}

export default ResultScreen