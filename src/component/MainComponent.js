import React, { useState } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent'; 
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
      <Header />
      <Menu dishes={dishes} onClick={(dishID) => onDishSelect(dishID)}/>
      <DishDetail dish={filterByDishID(selectedDish)} />
      <Footer />
    </div>
  );
}

export default Main;
