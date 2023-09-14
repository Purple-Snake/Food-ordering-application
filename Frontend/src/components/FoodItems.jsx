import Card from "react-bootstrap/Card";

function FoodItems(foodItem) {
  console.log(foodItem.foodItem.picture);
  return (
    <Card style={{ width: "70rem" }}>
      <Card.Body>
        <Card.Img variant="top" src={foodItem.foodItem.picture} />
        <Card.Title>{foodItem.foodItem.name}</Card.Title>
        <Card.Text>{foodItem.foodItem.ingredients}</Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default FoodItems;
