import React from 'react';
import { connect } from 'react-redux';
import Homepage from './homepage'
import { getAllSneakers } from "../../actions/sneaker_actions"

const mSTP = state => {
    return ({
        sneakers: Object.values(state.entities.sneakers)
    })
}

const mDTP = dispatch => ({
    getAllSneakers: () => dispatch(getAllSneakers())
})

export default connect(mSTP,mDTP)(Homepage);