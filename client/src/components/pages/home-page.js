import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

const HomePage = ({ coffee, coffeeLoaded }) => {
    console.log(coffee);
    return (
        <div>
            <h1>Hello coffee</h1>
            <button onClick={coffeeLoaded}>Click me!</button>
        </div>
    );
};

const mapDispatchToProps = (state) => {
    return {
        coffee: state.coffee
    }
}

export default connect(mapDispatchToProps, actions)(HomePage);