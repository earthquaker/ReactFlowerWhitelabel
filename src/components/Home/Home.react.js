import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as companyActions from '../../actions/companyActions';
import Header from './Header.react';
class Home extends Component {

    componentWillMount(){
        this.props.getKeyFromDomain();
    }

    componentWillReceiveProps(nextProps) {
        //console.log(nextProps);
    }

    render() {
        return (
            <div className="container">
                <Header name={ this.props.company.settings_account.name } />
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        company: state.company
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getKeyFromDomain: () => dispatch(companyActions.getKeyFromDomain())
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);