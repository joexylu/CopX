import React from 'react';
import { connect } from 'react-redux';
import Homepage from './homepage'
import { getAllSneakers, getAllSneakersByBrand } from "../../actions/sneaker_actions"

const mSTP = (state,ownProps) => {
    return ({
        sneakers: Object.values(state.entities.sneakers)
    })
}

const mDTP = dispatch => ({
    getAllSneakers: () => dispatch(getAllSneakers()),
    getAllSneakersByBrand: (brand) => dispatch(getAllSneakersByBrand(brand))
})

export default connect(mSTP,mDTP)(Homepage);