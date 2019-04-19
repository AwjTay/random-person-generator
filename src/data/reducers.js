import initial from "./initial"

const reset = state => {
	return initial
}

const updateOptions = (state, action) => ({...state, ageRequested : action.ageRequested, emailRequested : action.emailRequested, dobRequested : action.emailRequested})

const updateHistory = (state, action) => ({...state, history : [...state.history, action.person]}) 

const updatePerson = (state, action) => ({...state, response : action})

const reducer = (state, action) => {
  switch (action.type) {
  	case "reset" : return reset()
  	case "setOptions" : return updateOptions(state, action)
  	case "setPerson" : return updateHistory(updatePerson(state, action), action)
	default:
	    return state
  }
}

export default reducer

//issue with how we're recieving action.person