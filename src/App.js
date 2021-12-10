import logo from "./logo.svg";
import "./App.css";
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";
// Import Hooks from React
import { useState, useEffect } from "react";
// Import Router 6 Component (Route -> Route, Switch -> Routes)
import { Route, Routes } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const url = "https://rugpull.herokuapp.com/rugpull/";
  const [posts, setPosts] = useState([]);
  const nullRugpull = {
    confession: "",
    age: "",
  };
  const [targetRugpull, setTargetRugpull] = useState(nullRugpull);
  const getRugpull = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
  };
  return <div className="App"></div>;
}

export default App;
