import React, { useState } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent'; 
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

function Main() {
  const [dishes, setDishes] = useState(DISHES);
  // const [selectedDish, setSelectedDish] = useState(null);

  // const onDishSelect = (dishID) => {
  //   setSelectedDish(dishID);
  // }

  // const filterByDishID = () => {
  //   const filteredArrayOfDishes = dishes.filter((dish) => dish.id === selectedDish);
  //   return filteredArrayOfDishes[0];
  // }

  const HomePage = () => {
    return (
      <Home />
    )
  }

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage}/>
        <Route exact path="/menu" component={() => <Menu dishes={dishes}/>}/>
        <Redirect to="/home"></Redirect>
      </Switch>
      {/* <Menu dishes={dishes} onClick={(dishID) => onDishSelect(dishID)}/>
      <DishDetail dish={filterByDishID(selectedDish)} /> */}
      <Footer />
    </div>
  );
}

export default Main;
