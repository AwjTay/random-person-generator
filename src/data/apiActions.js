import axios from "./axios"
import {setPerson} from "./stateActions"

export const getPerson = (data) => (dispatch, getState) => {

	console.log(data)

	axios.get(`/?ext&region=${data.nationality}&gender=${data.gender}`, 

		).then( response => {

		let emailReq = getState().emailRequested
		let dobReq = getState().dobRequested
		let ageReq = getState().ageRequested
		

		const name = response.data.name
		const surname = response.data.surname
		const gender = response.data.gender
		const region = response.data.region
		const age = ageReq ? response.data.age : null
		const dob = dobReq ? response.data.birthday.dmy : null
		const email = emailReq ? response.data.email : null

		const person = [name, surname, gender, region, age, dob, email].reduce((acc, val) => {
			if (val !== null) {
				acc.push(val);
			}
			return acc;
		}, []);

		console.log(person)

		dispatch(setPerson(person))
		

	}).catch( error => console.log(error))

}

/*
if (val !== null) {
			acc.push(val);
		}
		return acc;
	}, []);
	return 	muscleGroups;
}

*/