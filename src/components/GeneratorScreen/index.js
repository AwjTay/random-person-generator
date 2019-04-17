import { connect } from 'react-redux'
import GeneratorScreen from './GeneratorScreen'
import { getPerson } from "../../data/apiActions";
import { setOptions } from "../../data/stateActions";

const mapDispatchToProps = (dispatch) => ({
	onSubmit: data => {
		dispatch(getPerson(data))
		dispatch(setOptions(data))
	}
})


export default connect(null, mapDispatchToProps)(GeneratorScreen)