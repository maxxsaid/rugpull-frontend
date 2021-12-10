import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <div>
        <input
          type="text"
          onChange={handleChange}
          value={formData.confession}
          name="confession"
        />
        <input
          type="text"
          onChange={handleChange}
          value={formData.age}
          name="age"
        />
      </div>
      <input type="submit" value={buttonLabel} />
    </form>
  );
};

export default Form;
