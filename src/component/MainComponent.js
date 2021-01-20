import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent'; 
import { DISHES } from '../shared/dishes';

function Main() {
  const [dishes, setDishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dishID) => {
    setSelectedDish(dishID);
  }

  const filterByDishID = () => {
    const filteredArrayOfDishes = dishes.filter((dish) => dish.id === selectedDish);
    return filteredArrayOfDishes[0];
  }

  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes} onClick={(dishID) => onDishSelect(dishID)}/>
      <DishDetail dish={filterByDishID(selectedDish)} />
    </div>
  );
}

export default Main;
