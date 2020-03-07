import { connect  } from 'react-redux';
import SneakersIndex from "./sneaker_index"
import { getAllSneakers } from "../../actions/sneaker_actions"


const mSTP = state => {
    return ({
        sneakers: Object.values(state.entities.sneakers)
    })
}

const mDTP = dispatch => ({
    getAllSneakers: () => dispatch(getAllSneakers())
})

export default connect(mSTP,mDTP)(SneakersIndex);