import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Details from "./Components/Details";
import SearchPage from "./Components/SearchPage";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:productId" element={<Details />} />
          <Route path="/searchpage" element={<SearchPage />} />
        </Route>
          <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
