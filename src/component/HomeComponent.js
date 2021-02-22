import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

const RenderCard = ({ item, loading, errorMessage }) => {
  if (loading) {
    return (
      <Loading />
    )
  } else if (errorMessage) {
    return (
      <h4>{errorMessage}</h4>
    )
  } else return (
    <FadeTransform in
      transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)'
      }} >
      <Card>
        <CardImg src={baseUrl + item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    </FadeTransform>
  )
}

const Home = (props) => {
  const {
    dish,
    dishesLoading,
    dishesErrorMessage,
    promotion,
    promosLoading,
    promosErrorMessage,
    leader,
    leadersLoading,
    leadersErrorMessage
  } = props;
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={dish}
            loading={dishesLoading}
            errorMessage={dishesErrorMessage} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={promotion}
            loading={promosLoading}
            errorMessage={promosErrorMessage} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={leader}
            loading={leadersLoading}
            errorMessage={leadersErrorMessage} />
        </div>
      </div>
    </div>
  )
}

export default Home;