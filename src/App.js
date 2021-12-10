import "./App.css";
import AllPosts from "./Pages/AllPosts";
import SinglePost from "./Pages/SinglePost";
import Form from "./Pages/Form";
// Import Hooks from React
import { useState, useEffect } from "react";
// Import Router 6 Component (Route -> Route, Switch -> Routes)
import { Route, Routes, Link, useNavigate } from "react-router-dom";

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
  const addRugpull = async (newRugpull) => {
    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRugpull),
    });

    getRugpull();
  };
  const getTargetRugpull = (rugpull) => {
    setTargetRugpull(rugpull);
    navigate("/edit");
  };
  const updateRugpull = async (rugpull) => {
    await fetch(url + rugpull.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rugpull),
    });
    getRugpull();
  };
  const deleteRugpull = async (rugpull) => {
    await fetch(url + rugpull.id, {
      method: "delete",
    });
    getRugpull();
    navigate("/");
  };

  useEffect(() => {
    getRugpull();
  }, []);
  return (
    <div className="App">
      <a href="/">
        <h1>Rugpull</h1>
      </a>
      <Link to="/new">
        <button>ADD</button>
      </Link>
      <Routes>
        <Route path="/" element={<AllPosts posts={posts} />} />
        <Route
          path="/post/:id"
          element={
            <SinglePost
              posts={posts}
              edit={getTargetRugpull}
              deleteRugpull={deleteRugpull}
            />
          }
        />
        <Route
          path="/new"
          element={
            <Form
              initialRugpull={nullRugpull}
              handleSubmit={addRugpull}
              buttonLabel="Create"
            />
          }
        />
        <Route
          path="/edit"
          element={
            <Form
              initialRugpull={targetRugpull}
              handleSubmit={updateRugpull}
              buttonLabel="Update"
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
