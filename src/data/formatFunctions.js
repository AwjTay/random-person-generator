 export const personFormatter = (person) => {
 	
	const finishedPerson = person.reduce((acc, detail, i) => {
	
		if(i === 0){
			acc.push(`First Name: ${detail}`)
		}
		else if(i === 1){
			acc.push(`Surname: ${detail}`)
		}
		else if(i === 2){
			acc.push(`Gender: ${detail}`)
		}
		else if(i === 3){
			acc.push(`Country: ${detail}`)
		}
		else if(i === 4){
			acc.push(`Age: ${detail}`)
		}
		else if(i === 5){
			acc.push(`DoB: ${detail}`)
		}
		else if(i === 6){
			acc.push(`Email: ${detail}`)
		}
		else{
			return null
		}
		return acc
	}, [])
	const cleanPerson = finishedPerson.filter ( val => !val.includes("not requested"))
	return cleanPerson
}


