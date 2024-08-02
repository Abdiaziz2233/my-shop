import { useEffect, useState } from "react";
import Footer from "./Footer";
import Home from "./Home";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import SingleItem from "./SingleItem";
import Cart from "./Cart";
import Account from "./Account";
import Phone from "./Phone";
import Login from "./Login";
import Signup from "./SignUp";
import Profile from "./Profile";

function App() {
  const [items, setItems] = useState([])
  const [user, setUser] = useState(null);

  useEffect(()=>{
    fetch("http://localhost:5000/items") 
    .then(res=>res.json())
    .then(response => setItems(response))
  }, [])
 
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  return (
    <div className="App">
      <NavBar user={user}/>
      <Routes>
        <Route path="/" element={<Home items={items}/>} />
        <Route path="/items/:id" element={<SingleItem items={items}/>} />
        <Route path="/phone" element={<Phone/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/account" element={<Profile/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
