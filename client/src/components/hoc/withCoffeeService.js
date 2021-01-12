import React from 'react';
import { CoffeeConsumer } from '../coffee-service-context';

const withCoffeeService = () => (Wrapped) => {

    return (props) => {
      return (
        <CoffeeConsumer>
          {
            (coffeeService) => {
              return (<Wrapped {...props}
                coffeeService={coffeeService}/>);
            }
          }
        </CoffeeConsumer>
      );
    }
  };


export default withCoffeeService;