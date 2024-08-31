import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import "./index.css";

const Slider = () => {
  const [products, setProducts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchTitle.toLowerCase())
    )
    .filter((product)=>selectedCategory==="" || selectedCategory==product.category)

  return (
    <div>
      <Helmet>
        <title>Slider page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <ul>
        <li
          className={`list__item ${selectedCategory === "" ? "active" : ""}`}
          onClick={() => {
            setSelectedCategory("");
          }}
        >
          All
        </li>
        <li
          className={`list__item ${
            selectedCategory === "men's clothing" ? "active" : ""
          }`}
          onClick={() => {
            setSelectedCategory("men's clothing");
          }}
        >
          Men
        </li>
        <li
          className={`list__item ${
            selectedCategory === "women's clothing" ? "active" : ""
          }`}
          onClick={() => {
            setSelectedCategory("women's clothing");
          }}
        >
          Women
        </li>
        <li
          className={`list__item ${
            selectedCategory === "jewelery" ? "active" : ""
          }`}
          onClick={() => {
            setSelectedCategory("jewelery");
          }}
        >
          Jewellery
        </li>
        <li
          className={`list__item ${
            selectedCategory === "electronics" ? "active" : ""
          }`}
          onClick={() => {
            setSelectedCategory("electronics");
          }}
        >
          Electronics
        </li>
      </ul>
      <div className="input">
        <input
          type="text"
          placeholder="Search Product title"
          value={searchTitle}
          onChange={(e) => {
            setSearchTitle(e.target.value);
          }}
        />
      </div>
      <div className="mycards">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="card">
              <div className="card-title">
                <p>{product.title}</p>
                <span>{product.description.slice(0, 20)}</span>
                <img src={product.image} alt={product.title} width={"200px"} />
              </div>
            </div>
          ))
        ) : (
          <h3>NOT FOUND --</h3>
        )}
      </div>
    </div>
  );
};

export default Slider;
