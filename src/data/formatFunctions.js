 export const personFormatter = (person) => {

	const fPerson = person.reduce((acc, detail, i) => {
		if(i === 0 && detail !== null){
			acc.push(`First Name: ${detail}`)
		}
		else if(i === 1 && detail !== null){
			acc.push(`Surname: ${detail}`)
		}
		else if(i === 2 && detail !== null){
			acc.push(`Gender: ${detail}`)
		}
		else if(i === 3 && detail !== null){
			acc.push(`Country: ${detail}`)
		}
		else if(i === 4 && detail !== null){
			acc.push(`Age: ${detail}`)
		}
		else if(i === 5 && detail !== null){
			acc.push(`DoB: ${detail}`)
		}
		else if(i === 6 && detail !== null){
			acc.push(`Email: ${detail}`)
		}
		else{
			return null
		}
		return acc
	}, [])
	return fPerson
}