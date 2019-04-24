import { connect } from 'react-redux'
import ResultScreen from './ResultScreen'

const mapStateToProps = state => {
	return{
		historyArray : state.history,	
	}
}

export default connect(mapStateToProps, null)(ResultScreen)