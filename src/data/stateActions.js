export const setPerson = (person) => {
	return {
		type : "setPerson",
		person : person,

	}
};

export const changeLoad = () => {
	return {
		type : "changeLoad",
	}
}

export const setOptions = ({ageRequested, dobRequested, emailRequested}) => {
	return {
		type : "setOptions",
		ageRequested,
		dobRequested,
		emailRequested,
	}
};