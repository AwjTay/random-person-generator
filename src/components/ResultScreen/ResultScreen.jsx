import React, { Component } from 'react'
import Result from "../Result"

class ResultScreen extends Component{
	constructor(props){
		super(props)
	}

	render(){
		
		console.log(this.props.historyArray)
		
		return(
			<React.Fragment>
				<p>People</p>
				<ul>

					{this.props.historyArray.map((person, i) => (
						<li key={i}>

							{
								<table className="table">
							        <thead>
							            <tr>
							                <th scope="col">#</th>
							                <th scope="col">#</th>
							            </tr>
							        </thead>
							        <tbody>
							        { person.map(index => (
							            <tr key={index}>
							                <th scope="row">#</th>
							                        <td>{ index }</td>      
							            </tr>
							            ))}  
							        </tbody>
							    </table>
							}

						</li>))
					}

				</ul>

			</React.Fragment>
		)
	}


}






/*
const ResultScreen = historyArray => {
	console.log(historyArray)
	const { history } = historyArray
	console.log(history)
	return(
		<React.Fragment>
			<ul>

			

			</ul>

		</React.Fragment>
	)
}
*/
export default ResultScreen

//{historyArray ? historyArray.map((person, i) => <li key={i}>{person}</li>) : null}

//{historyArray.map((i) => <li key={i}>{i}</li>)}	