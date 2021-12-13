import { useState } from "react";
import { useNavigate } from "react-router-dom";
const button = {
  backgroundColor: "rgb(89,50,150)",
  fontFamily: "Roboto",
  borderRadius: "6px",
  fontSize: "1em",
  display: "inline-block",
  margin: "10px 3px",
  boxShadow: "rgba(155, 75, 200) 0px 1px 5px",
};
const inputAll = {
  margin: "30px",
  textAlign: "center",
};
const inputStyle = {
  width: "60%",
  margin: "10px",
  backgroundColor: "white",
  color: "rgb(49,56,102)",
};
const index = {
  margin: "0",
};
const Form = ({ initialRugpull, handleSubmit, buttonLabel }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialRugpull);
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmission = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmission}>
      <div style={inputAll}>
        <h3 style={index}>Confession</h3>
        {/* <input
          style={inputStyle}
          type="text"
          onChange={handleChange}
          value={formData.confession}
          name="confession"
        /> */}

        <textarea
          style={inputStyle}
          value={formData.confession}
          onChange={handleChange}
          name="confession"
        />

        <h3 style={index}>Age</h3>
        <input
          style={inputStyle}
          type="text"
          onChange={handleChange}
          value={formData.age}
          name="age"
        />
      </div>
      <input style={button} type="submit" value={buttonLabel} />
    </form>
  );
};

export default Form;
