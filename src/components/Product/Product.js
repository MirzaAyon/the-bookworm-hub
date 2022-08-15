import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  const { img, name, price } = product;
  return (
    <div className="col-lg-4 col-md-6 col-12 new-card">
      <div className="single-card">
        <Card className="card">
          <Card.Img className="p-3" variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Price: {price}</Card.Text>
            <Button
              onClick={() => handleAddToCart(product)}
              className="w-100 btn-add-to-cart fw-bold btn-outline-dark border-0"
              variant=""
            >
              Add to Cart
              <FontAwesomeIcon className="ms-2" icon={faShoppingCart} />
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Product;
