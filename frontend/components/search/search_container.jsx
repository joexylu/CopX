import { connect } from 'react-redux'
import Search from './search'
import { getResults, clearSearch } from '../../actions/search_actions'
// import { getProduct } from '../../actions/product_actions'

const mSTP = (state, ownProps) => ({
    searches: state.entities.search || []
})

const mDTP = dispatch => ({
    getResults: search => dispatch(getResults(search)),
    clearSearch: () => dispatch(clearSearch())
})

export default connect(mSTP, mDTP)(Search)