import { connect  } from 'react-redux';
import SneakersIndex from "./sneaker_index"
import { getAllSneakers, getAllSneakersByBrand } from "../../actions/sneaker_actions"


const mSTP = state => {
    return ({
        sneakers: Object.values(state.entities.sneakers) || []
    })
}

const mDTP = dispatch => ({
    getAllSneakers: () => dispatch(getAllSneakers()),
    getAllSneakersByBrand: (brand) => dispatch(getAllSneakersByBrand(brand))
})

export default connect(mSTP,mDTP)(SneakersIndex);