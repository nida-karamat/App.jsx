import React from "react";
import "./Category.css";
import Input from "../../Components/Input";
const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>
        </label>

        <input
          handleChange={handleChange}
          value="sneeker"
          title="Sneekers"
          name="test"
        />
        <input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;
