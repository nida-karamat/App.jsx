import React from "react";
import Input from "../../Components/Input";
import "./Color.css";
const Colors = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test" />
        <span className="checkmark all"></span>
      </label>

      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        color="balck"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test1"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test1"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test1"
        color="green"
      />
      <Input
        handleChange={handleChange}
        value="white"
        title="White"
        name="test1"
        color="white"
      />
      <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} value="white" name />
        <span
          className="checkmard"
          style={{ background: "white", border: "2px solid black" }}
        ></span> White
      </label>
    </div>
  );
};
export default Colors;
