import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function DetailsItem({ listOfProducts, setShop, shop }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const getId = useParams();

  const foundArticle = listOfProducts.find((elt) => elt.id == getId.id);
  const handleAddCart = () => {
    const newItem = { ...foundArticle, qte: 1 };
    const existItem = shop.articles.find((elt) => elt.id == newItem.id);
    if (!existItem) {
      setShop({
        articles: [...shop.articles, newItem],
        total: shop.total + newItem.price,
      });
    }
    if (existItem) {
      setShop({
        articles: shop.articles.map((elt) => {
          if (elt.id == newItem.id) {
            return { ...elt, qte: elt.qte + 1 };
          } else {
            return elt;
          }
        }),
        total: shop.total + newItem.price,
      });
    }
    console.log(shop);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <img src={foundArticle.image} alt={foundArticle.name} width="90px" />
      <h1>{foundArticle.name}</h1>
      <h1>{foundArticle.price} $</h1>
      <button onClick={handleClick}>Back Home</button>
      <button onClick={handleAddCart}>Add to cart</button>
    </div>
  );
}

export default DetailsItem;
