import axios from "./axios"
import {setPerson} from "./stateActions"

export const getPerson = (data) => (dispatch, getState) => {
	
	
	axios.get(`/?ext&region=${data.nationality}&gender=${data.gender}`, 

		).then( response => {
			let emailReq = getState().emailRequested
			let dobReq = getState().dobRequested
			let ageReq = getState().ageRequested
			
			const name = response.data.name
			const surname = response.data.surname
			const gender = response.data.gender
			const region = response.data.region
			const age = ageReq ? response.data.age : "not requested"
			const dob = dobReq ? response.data.birthday.dmy : "not requested"
			const email = emailReq ? response.data.email : "not requested"

			const person = [name, surname, gender, region, age, dob, email].reduce((acc, val) => {
				
			acc.push(val);
			
			return acc;
		}, []);

		dispatch(setPerson(person))
		
	}).catch( error => console.log(error))

}
