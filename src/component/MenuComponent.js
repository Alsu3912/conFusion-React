import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

function Menu(props) {

  const { dishes } = props;

  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dish) => {
    setSelectedDish(dish);
  }

  return (
    <div className="container">
      <div className="row">
        {dishes.map((dish) => (
          <div key={dish.id} className="col-12 col-md-5 m-1">
            <Card onClick={() => onDishSelect(dish)}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        ))}
      </div>
      <DishDetail dish={selectedDish} />
    </div>
  );
}

export default Menu;