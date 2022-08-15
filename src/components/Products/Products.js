import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Item from "../Item/Item";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [phones, setPhones] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("phones.json")
      .then((res) => res.json())
      .then((data) => setPhones(data));
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
          text: "You can not add more than four products",
        });
      }
    } else {
      // alert("already added");
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Already added!",
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
      <h1 className="text-center fw-bolder py-3">New on Pixel Store.</h1>
      <div className="row">
        <div className="col-lg-9 mb-5">
          <div className="row g-4">
            {phones &&
              phones.map((phone) => (
                <Product
                  product={phone}
                  key={phone.id}
                  handleAddToCart={handleAddToCart}
                />
              ))}
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12 mx-auto sidebar">
          <h2 className="text-center mt-2">Selected Phones</h2>
          {cart &&
            cart.map((item) => (
              <Item handleDelete={handleDelete} item={item} key={item.id} />
            ))}
          <button
            onClick={handleChoseOne}
            className="my-2 btn w-100 rounded-pill btn-outline-primary text-dark fw-bolder"
          >
            CHOOSE 1 FOR ME
          </button>
          <br />
          <button
            onClick={handleReset}
            className=" btn w-100 rounded-pill btn-outline-primary text-dark fw-bolder"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
