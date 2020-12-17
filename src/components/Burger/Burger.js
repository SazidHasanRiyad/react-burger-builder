import React from 'react';
import classes from './Burger.css';
import BugerIngredient from './Burgeringredient/Burgeringredient';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BugerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((initialValue, currentValue) => {
      return initialValue.concat(currentValue);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BugerIngredient type={'bread-top'} />
      {transformedIngredients}
      <BugerIngredient type={'bread-bottom'} />
    </div>
  );
};

export default burger;

/* 

Object.keys(props.in...) >>> ['salad', 'bacon', 'cheese', 'meat']
igKey >>> ingredient name like >>> 'salad'

[Array(3)] >>> [ [ undeifined, undeifined, undeifined ] ]
[...Array(3)] >>> [ undeifined, undeifined, undeifined ]

.reduce((initialValue, currentValue) => {
      return initialValue.concat(currentValue);  >>> [] + [{}, {}] = [{}, {}] + [{}, {}] = [{}, {}, {}, {}] ...
  }, []);

*/
