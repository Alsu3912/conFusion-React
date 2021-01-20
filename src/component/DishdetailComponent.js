import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
  if (dish != null)
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  else
    return (
      <div></div>
    );
}

function RenderComments({ dish }) {

  const parseDate = (date) => {
    const milliseconds = Date.parse(date);
    const parsedDate = new Date(milliseconds);
    const formatter = new Intl.DateTimeFormat('en-US', { month: 'short'});
    const dateFormat = {month: formatter.format(parsedDate), day: parsedDate.getDay(), year: parsedDate.getFullYear()}
    return dateFormat;
  };
  
  if (dish != null) 
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        {dish.comments.map((comment) => (
            <div key={comment.id}>
              <p>{comment.comment}</p>
              <p>-- {comment.author}, {parseDate(comment.date).month} {parseDate(comment.date).day}, {parseDate(comment.date).year}</p>
            </div>             
        ))}
      </div>
    );
  else
    return (
      <div></div>
    );
}

function DishDetail({ dish }) {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={dish} />
        </div>
        <RenderComments dish={dish} />
      </div>
    </div>
  );
}

export default DishDetail;