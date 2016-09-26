import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../modules/home'
import HomeView from '../components/HomeView'

// State to props
const mapStateToProps = (state) => ({
  markers: state.home.markers,
  validation: state.home.validation
})

// Dispatch to props
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
