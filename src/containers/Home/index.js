import { connect } from 'react-redux'
import { default as HomeComponent } from '../../components/Home'


const mapStateToProps = state => {
  return {
    // nth, no data needed here yet
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initData() {
      // @TODO:
      // It feels like it's not needed here yet
      // But it's definately a good practice to structure the project properly since very begining
    }
  }
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)

export default Home