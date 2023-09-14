import Card from 'react-bootstrap/Card';

function FoodItems( foodItem ) {
    console.log(foodItem);
    return ( 
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{foodItem.foodItem.name}</Card.Title>
          <Card.Text>{foodItem.foodItem.ingredients}</Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
     );
}

export default FoodItems;