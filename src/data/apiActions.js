import axios from "./axios"
import {setPerson} from "./stateActions"

export const getPerson = (data) => (dispatch, getState) => {

	console.log(data)

	axios.get(`/?ext&region=${data.nationality}&gender=${data.gender}`, 

		).then( response => {
		dispatch(setPerson(response.data))
		console.log(response.data)

	}).catch( error => console.log(error))

}