import React from 'react';
import { connect } from 'react-redux';
import Homepage from './homepage'

const mapStateToProps = state => {
    page: "page"
};

const mapDispatchProps = (dispatch) => ({

});

// export default connect(mapStateToProps, mapDispatchProps)(Homepage);
export default connect(null, null)(Homepage);