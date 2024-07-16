import { useEffect, useState } from "react";
import Footer from "./Footer";
import Home from "./Home";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import SingleItem from "./SingleItem";
import Cart from "./Cart";
import Account from "./Account";
import Phone from "./Phone";

function App() {
  const [items, setItems] = useState([])


  useEffect(()=>{
    fetch("http://localhost:4000/items")
    .then(res=>res.json())
    .then(response => setItems(response))
  }, [])

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home items={items}/>} />
        <Route path="/items/:id" element={<SingleItem items={items}/>} />
        <Route path="/phone" element={<Phone/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/account" element={<Account/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
