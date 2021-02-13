import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Loading from './LoadingComponent';

const RenderCard = ({ item, dishesLoading, dishesErrorMessage }) => {
  if (dishesLoading) {
    return (
      <Loading />
    )
  } else if (dishesErrorMessage) {
    return (
      <h4>{dishesErrorMessage}</h4>
    )
  } else return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  )
}

const Home = (props) => {
  const { dish, dishesLoading, dishesErrorMessage, promotion, leader } = props;
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={dish}
            dishesLoading={dishesLoading}
            dishesErrorMessage={dishesErrorMessage} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={leader} />
        </div>
      </div>
    </div>
  )
}

export default Home;