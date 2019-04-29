import initial from "./initial"

const reset = state => {
	return initial
}

const updateOptions = (state, action) => ({...state, ageRequested : action.ageRequested, emailRequested : action.emailRequested, dobRequested : action.dobRequested})

const updateHistory = (state, action) => {
	if(state.history.length < 4){
		return (
			{...state, history : [...state.history, action.person]}
		) 
	}
	else {
		return (
			{...state, history : initial.history}
		)
	}
}

const setChangeLoad = (state) => ({...state, loaded : !state.loaded});

const updatePerson = (state, action) => ({...state, response : action})

const reducer = (state, action) => {
  switch (action.type) {
  	case "reset" : return reset()
  	case "setOptions" : return updateOptions(state, action)
  	case "setPerson" : return updateHistory(updatePerson(state, action), action)
  	case "changeLoad": return setChangeLoad(state); 
	default:
	    return state
  }
}

export default reducer

//issue with how we're recieving action.person