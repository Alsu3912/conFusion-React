import React from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent'; 
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Main() {

  const dishes = useSelector(state => state.dishes);
  const comments = useSelector(state => state.comments);
  const leaders = useSelector(state => state.leaders);
  const promotions = useSelector(state => state.promotions);

  const filterByDishID = (match, entryForFilter, id) => {
    const filteredArray = entryForFilter.filter((elem) => elem[id] === parseInt(match.params.dishId, 10));
    return filteredArray;
  }

  const filterByFeaturedAttribute = (entryForFilter) => {
    const filteredArray = entryForFilter.filter((elem) => elem.featured);
    return filteredArray[0];
  }

  const HomePage = () => {
    return (
      <Home dish={filterByFeaturedAttribute(dishes)} promotion={filterByFeaturedAttribute(promotions)} 
      leader={filterByFeaturedAttribute(leaders)} />
    )
  }

  const DishWithId = ({ match }) => {
    return (
      <DishDetail dish={filterByDishID(match, dishes, "id")[0]} 
      comments={filterByDishID(match, comments, "dishId")} />
    )
  }

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage}/>
        <Route exact path="/menu" component={() => <Menu dishes={dishes} />}/>
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route exact path="/contactus" component={Contact} />
        <Route exact path="/about" component={() => <About leaders={leaders} />} />
        <Redirect to="/home"></Redirect>
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
