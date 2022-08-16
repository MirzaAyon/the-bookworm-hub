import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Item from "../Item/Item";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleDelete = (item) => {
    const addedCart = cart.filter((pd) => pd.id !== item.id);
    setCart(addedCart);
  };
  const handleAddToCart = (product) => {
    const newProduct = cart.find((pd) => pd.id === product.id);
    if (!newProduct) {
      if (cart.length < 4) {
        const newCart = [...cart, product];
        setCart(newCart);
      } else {
        // alert("You can not add more than four");
        Swal.fire({
          icon: "error",
          title: "Sorry...",
          text: "You can not add more than four books",
        });
      }
    } else {
      // alert("already added");
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Already added in the cart",
      });
    }
  };
  const handleReset = () => {
    setCart([]);
  };
  const handleChoseOne = () => {
    if (cart.length > 0) {
      const random = cart[Math.floor(Math.random() * cart.length)];
      setCart([random]);
    }
  };
  return (
    <div className="container">
      <marquee behavior="" direction="1"><h1 className="text-center fw-bolder py-3">Get your favourite books</h1></marquee>
      <p className="text-center text-danger py-5 fw-bold">Books are the quietest and most constant of friends, they are the most accessible and wisest of counselors, and the most patient of teachers.</p>
      <div className="row">
        <div className="col-lg-9 mb-5">
          <div className="row g-4">
            {books &&
              books.map((book) => (
                <Product
                  product={book}
                  key={book.id}
                  handleAddToCart={handleAddToCart}
                />
              ))}
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12 mx-auto sidebar">
          <h2 className="text-center mt-2">Your books</h2>
          {cart &&
            cart.map((item) => (
              <Item handleDelete={handleDelete} item={item} key={item.id} />
            ))}
          <button
            onClick={handleChoseOne}
            className="my-2 btn w-100 rounded-pill btn-outline-primary text-dark fw-bolder"
          >
            CHOOSE ONE FOR ME
          </button>
          <br />
          <button
            onClick={handleReset}
            className=" btn w-100 rounded-pill btn-outline-primary text-dark fw-bolder"
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
