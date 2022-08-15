import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./Components/List";
import Header from "./Components/Header";
import SignIn from "./Components/SignIn";
import { products } from "./data";
import { useState } from "react";
import Profile from "./Components/Profile";
import DetailsItem from "./Components/DetailsItem";
import Shop from "./Components/Shop";
import PrivateRoute from "./Components/PrivateRoute";
import NotFoundPage from "./Components/NotFoundPage";

function App() {
  const [listOfProducts, setProducts] = useState(products);
  const [shop, setShop] = useState({ articles: [], total: 0 });
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    connect: false,
  });
  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser} />
      {user.connect && <Shop shop={shop} />}

      <Routes>
        <Route
          path="/"
          element={<List listOfProducts={listOfProducts} user={user} />}
        />
        <Route
          path="/list/:id"
          element={
            <DetailsItem
              listOfProducts={listOfProducts}
              shop={shop}
              setShop={setShop}
            />
          }
        />

        <Route
          path="/Profile"
          element={
            <PrivateRoute user={user}>
              <Profile user={user} />
            </PrivateRoute>
          }
        />

        <Route
          path="/SignIn"
          element={<SignIn setUser={setUser} user={user} />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
