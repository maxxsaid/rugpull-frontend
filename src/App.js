import "./App.css";
import AllPosts from "./Pages/AllPosts";
import SinglePost from "./Pages/SinglePost";
import Form from "./Pages/Form";
// Import Hooks from React
import { useState, useEffect } from "react";
// Import Router 6 Component (Route -> Route, Switch -> Routes)
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Modal from "./Components/modal";

function App() {
  const logo = {
    fontSize: "4em",
    padding: "40px",
    marginTop: "20px",
    fontFamily: "Rock Salt",
  };
  const slogan = {
    fontFamily: "Architects Daughter",
    fontSize: "1.5em",
  };
  const button = {
    backgroundColor: "rgb(89,50,150)",
    fontFamily: "Architects Daughter",
    borderRadius: "6px",
    fontSize: "1em",
    display: "inline-block",
    margin: "10px 3px",
    boxShadow: "rgba(155, 75, 200) 0px 1px 5px",
  };
  const [modalOpen, setModalOpen] = useState(false);
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
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      <a href="/">
        <h1 style={logo}>Rug PuLL </h1>
      </a>
      <p style={slogan}>Confess to me &#128521;</p>
      <Link to="/new">
        <button style={button}>Confess</button>
      </Link>
      <button
        style={button}
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        About
      </button>
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
