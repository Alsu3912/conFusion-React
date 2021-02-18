import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function Menu({ dishes }) {
  if (dishes.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    )
  } else if (dishes.errorMessage) {
    return (
      <div className="container">
        <div className="row">
          <h4>{dishes.errorMessage}</h4>
        </div>
      </div>
    )
  } else return (
    <div className="container">
      <div className="row">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
        {dishes.dishes.map((dish) => (
          <div key={dish.id} className="col-12 col-md-5 m-1">
            <Card>
              <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
              </Link>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;