import React from "react";
import Laoding from "../../components/Laoding";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddPage from "../Add";
import { Helmet } from "react-helmet-async";

const Category = () => {
  const [counter, setCounter] = useState(0);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // useEffect()

  function increaseButton() {
    setCounter(counter + 1);
  }
  function decareseButton() {
    setCounter(counter - 1);
  }
  function getCategories() {
    setLoading(true);
    fetch("https://northwind.vercel.app/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  useEffect(() => {}, []);

  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1>Categories Page</h1>
      <button onClick={increaseButton}>+</button>
      <span>{counter}</span>
      <button onClick={decareseButton}>-</button>
      <AddPage setCategories={setCategories}/>
      <p>---------------------------------------</p>
      <button onClick={getCategories}>get Categories</button>

      <ul>
     
        {loading && <Laoding />}
        {categories &&
          categories.map((item) => (
            <li
              style={{
                border: "2px solid black",
                width: "300px",
                margin: "5px",
              }}
              key={item.id}
            >
              {item.name} - {item.description}
              <br />
              <Button
                onClick={() => {
                  if (window.confirm("Are you sure delete ?")) {
                    fetch(
                      `https://northwind.vercel.app/api/categories/${item.id}`,
                      {
                        method: "DELETE",
                      }
                    );
                    setCategories(
                      categories.filter((cat) => cat.id != item.id)
                    );
                  }
                }}
                variant="danger"
              >
                DELETE
              </Button>
              <Button
                onClick={() => {
                  navigate(`categories/${item.id}`);
                }}
                variant="primary"
              >
                DETAIL
              </Button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Category;
