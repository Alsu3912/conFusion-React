import React, { useState } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent'; 
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';

function Main() {
  const [dishes, setDishes] = useState(DISHES);
  const [comments, setComments] = useState(COMMENTS);
  const [leaders, setLeaders] = useState(LEADERS);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  // const [selectedDish, setSelectedDish] = useState(null);

  // const onDishSelect = (dishID) => {
  //   setSelectedDish(dishID);
  // }

  // const filterByDishID = () => {
  //   const filteredArrayOfDishes = dishes.filter((dish) => dish.id === selectedDish);
  //   return filteredArrayOfDishes[0];
  // }

  const filterByFeaturedAttribute = (sortableArray) => {
    const filteredArray = sortableArray.filter((elem) => elem.featured);
    return filteredArray[0];
  }

  const HomePage = () => {
    return (
      <Home dish={filterByFeaturedAttribute(dishes)} promotion={filterByFeaturedAttribute(promotions)} 
      leader={filterByFeaturedAttribute(leaders)} />
    )
  }

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage}/>
        <Route exact path="/menu" component={() => <Menu dishes={dishes} />}/>
        <Route exact path="/contactus" component={Contact} />
        <Redirect to="/home"></Redirect>
      </Switch>
      {/* <Menu dishes={dishes} onClick={(dishID) => onDishSelect(dishID)}/>
      <DishDetail dish={filterByDishID(selectedDish)} /> */}
      <Footer />
    </div>
  );
}

export default Main;
