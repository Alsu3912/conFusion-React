import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderDish({ dish }) {
  if (dish != null)
    return (
      <div className="col-12 col-md-5 m-1">
        <FadeTransform in
          transformProps={{
            exitTransform: 'scale(0.5) translateY(-50%)'
          }} >
          <Card>
            <CardImg top src={baseUrl + dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </FadeTransform>
      </div>
    );
  else
    return (
      <div></div>
    );
}

function RenderComments({ comments, dishId, postComment }) {

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
        <ul className="list-unstyled">
          <Stagger in>
            {comments.map((comment) => (
              <Fade in key={comment.id}>
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>-- {comment.author}, {parseDate(comment.date).month} {parseDate(comment.date).day}, {parseDate(comment.date).year}</p>
                </li>
              </Fade>
            ))}
          </Stagger>
        </ul>
        <CommentForm dishId={dishId} postComment={postComment} />
      </div>
    );
  else
    return (
      <div>
        <CommentForm dishId={dishId} postComment={postComment} />
      </div>
    );
}

function DishDetail({ dish, isLoading, errorMessage, comments, commentsErrorMessage, postComment }) {
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
          {commentsErrorMessage !== null ? <h4>{commentsErrorMessage}</h4> : <RenderComments comments={comments} dishId={dish.id} postComment={postComment}/>}
        </div>
      </div>
    );
}

export default DishDetail;