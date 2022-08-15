import React from "react";

function Shop({ shop }) {
  console.log(shop);
  return (
    <>
      {shop.total !== 0 && (
        <div>
          {shop.articles.map((elt) => (
            <div>
              <h1>{elt.name}</h1>
              <h1>{elt.qte}</h1>
            </div>
          ))}
          <h1>{shop.total}</h1>
        </div>
      )}
    </>
  );
}

export default Shop;
