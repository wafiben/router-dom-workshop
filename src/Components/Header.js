import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Avatar from "react-avatar";

function Header({ user, setUser }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser({ ...user, connect: false });
    navigate("/");
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        boxShadow: "10px 10px 10px 12px gray",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "70px",
      }}
    >
      <Link to="/">
        <Button variant="primary">List</Button>
      </Link>
      {!user.connect ? (
        <div>
          {" "}
          <Link to="/SignIn">
            <Button variant="primary">Connect</Button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/Profile">
            <Avatar name={user.name} size={50} round={20} />
          </Link>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      )}
    </div>
  );
}

export default Header;
