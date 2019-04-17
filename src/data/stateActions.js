export const setPerson = ({name, surname, region, gender, age, email}) => {
	return {
		type : "setPerson",
		name,
		surname,
		region,
		gender,
		age,
		email,

	}
};

export const setOptions = ({ageRequested, dobRequested, emailRequested}) => {
	return {
		type : "setOptions",
		ageRequested,
		dobRequested,
		emailRequested,
	}
};