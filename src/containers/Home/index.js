import { connect } from 'react-redux'
import { get } from './actions'
import { default as HomeComponent } from '../../components/Home'


const mapStateToProps = state => {
  return {
    // nth, no data needed here yet
  }
}

const mapDispatchToProps = dispatch => {
  return {
    init() {
      dispatch(get())
    }
  }
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)

export default Home