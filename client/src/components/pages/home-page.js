import React from 'react';

import { connect } from 'react-redux';

const HomePage = ({ coffee }) => {
    console.log(coffee);
    return (
        <div>
            <h1>Кофе: {coffee[0].name}</h1>
            <p>Страна происхождения: {coffee[0].country}</p>
            <p>Цена: {coffee[0].price}</p>
        </div>
    );
};

const mapDispatchToProps = (state) => {
    return {
        coffee: state.coffee
    }
}

export default connect(mapDispatchToProps)(HomePage);