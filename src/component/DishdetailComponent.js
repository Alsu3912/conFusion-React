import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import Loading from './LoadingComponent';

function RenderDish({ dish }) {
  if (dish != null)
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  else
    return (
      <div></div>
    );
}

function RenderComments({ comments, dishId }) {

  const parseDate = (date) => {
    const milliseconds = Date.parse(date);
    const parsedDate = new Date(milliseconds);
    const formatter = new Intl.DateTimeFormat('en-US', { month: 'short' });
    const dateFormat = { month: formatter.format(parsedDate), day: parsedDate.getDay(), year: parsedDate.getFullYear() }
    return dateFormat;
  };

  if (comments != null)
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.comment}</p>
            <p>-- {comment.author}, {parseDate(comment.date).month} {parseDate(comment.date).day}, {parseDate(comment.date).year}</p>
          </div>
        ))}
        <CommentForm dishId={dishId} />
      </div>
    );
  else
    return (
      <div>
        <CommentForm dishId={dishId} />
      </div>
    );
}

function DishDetail({ dish, isLoading, errorMessage, comments }) {
  if (isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    )
  } else if (errorMessage) {
    return (
      <div className="container">
        <div className="row">
          <h4>{errorMessage}</h4>
        </div>
      </div>
    )
  } else
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={dish} />
          <RenderComments comments={comments} dishId={dish.id} />
        </div>
      </div>
    );
}

export default DishDetail;