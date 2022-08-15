import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const carDStyle = {
  backgroundColor: "white",
  boxShadow: "12px 10px 11px 13px gray",
  width: "400px",
};

function CardComponent({ product, user }) {
  console.log(user);
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (!user.connect) {
      if (window.confirm("you should before")) {
        navigate("/SignIn");
      }
    }
    if (user.connect) {
      navigate(`/list/${product.id}`);
    }
  };
  return (
    <div style={carDStyle}>
      <img src={product.image} alt={product.name} width="200px" />
      <h2>Name :{product.name}</h2>
      <Button variant="secondary" onClick={handleNavigate}>
        see details
      </Button>{" "}
    </div>
  );
}

export default CardComponent;
