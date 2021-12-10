import { useState } from "react";
import { useNavigate } from "react-router-dom";
const button = {
  backgroundColor: "#2F3063",
  display: "block",
  margin: "auto",
  textAlign: "center",
};
const inputAll = {
  margin: "30px",
  textAlign: "center",
};
const inputStyle = {
  width: "60%",
  margin: "10px",
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
        <input
          style={inputStyle}
          type="text"
          onChange={handleChange}
          value={formData.confession}
          name="confession"
        />
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
