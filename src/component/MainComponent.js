import React from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent'; 
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotions: state.promotions
  }
}

function Main(props) {

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
      <Home dish={filterByFeaturedAttribute(props.dishes)} promotion={filterByFeaturedAttribute(props.promotions)} 
      leader={filterByFeaturedAttribute(props.leaders)} />
    )
  }

  const DishWithId = ({ match }) => {
    return (
      <DishDetail dish={filterByDishID(match, props.dishes, "id")[0]} 
      comments={filterByDishID(match, props.comments, "dishId")} />
    )
  }

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage}/>
        <Route exact path="/menu" component={() => <Menu dishes={props.dishes} />}/>
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route exact path="/contactus" component={Contact} />
        <Route exact path="/about" component={() => <About leaders={props.leaders} />} />
        <Redirect to="/home"></Redirect>
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(connect(mapStateToProps)(Main));
