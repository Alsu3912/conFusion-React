import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDishes } from '../redux/ActionCreators'; 
import { actions } from 'react-redux-form';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent'; 
import Header from './HeaderComponent';
import Footer from './FooterComponent';

function Main() {

  const dishes = useSelector(state => state.dishes);
  const comments = useSelector(state => state.comments);
  const leaders = useSelector(state => state.leaders);
  const promotions = useSelector(state => state.promotions);

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchDishes()), [dispatch]);

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
      <Home dish={filterByFeaturedAttribute(dishes.dishes)} 
      dishesLoading={dishes.isLoading}
      dishesErrorMessage={dishes.errorMessage}
      promotion={filterByFeaturedAttribute(promotions)} 
      leader={filterByFeaturedAttribute(leaders)} />
    )
  }

  const DishWithId = ({ match }) => {
    return (
      <DishDetail dish={filterByDishID(match, dishes.dishes, "id")[0]}
      isLoading={dishes.isLoading} 
      errorMessage={dishes.errorMessage}
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
        <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={() => dispatch(actions.reset('feedback'))} />} />
        <Route exact path="/about" component={() => <About leaders={leaders} />} />
        <Redirect to="/home"></Redirect>
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
