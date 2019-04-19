import { connect } from 'react-redux'
import Result from './Result'

const mapStateToProps = state => {
	return{
		person : state.person	
	}
}

export default connect(mapStateToProps, null)(Result)