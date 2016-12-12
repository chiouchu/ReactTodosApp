import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as FilterActions from '../actions/filter';
import Filter from '../components/Filter';

class App extends Component {
    render() {
        return (
            <div className="filter">
                <Filter {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        filterActions: bindActionCreators(FilterActions, dispatch)
    };
};

const FilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default FilterContainer;
