import Axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import requireAuth from "./requireAuth";


function mapStateToProps(state) {
    return {
        token: state.auth.authenticated
    };
}

class Threads extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.token = this.props.token
    }
    
    // async componentDidMount() {
        // fetch when user signs in in the actions redux middleware
    //     const res = await Axios.get('/user/threads', {headers: 
    //         { authorization: this.token }
    //     })
    // }
    
    render() {
        return (
            <div>
                <p>Threads page</p>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(requireAuth(Threads));