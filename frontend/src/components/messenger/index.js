import React, { Component } from 'react';
import { connect } from 'react-redux';

import requireAuth from '../requireAuth'

function mapStateToProps(state) {
    return {
        token: state.auth.authenticated
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

class Messenger extends Component {
    render() {
        return (
            <div>
                <h2>Messenger</h2>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(requireAuth(Messenger));