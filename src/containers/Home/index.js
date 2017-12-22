import { connect } from 'react-redux'
import { get } from './actions'
import { default as HomeComponent } from '../../components/Home'


const mapStateToProps = state => {
  return {
    columns: state.home.columns,
    data: state.home.data
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