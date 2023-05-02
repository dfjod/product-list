import { useState } from "react";
import Book from "./Book";
import Dvd from "./Dvd";
import Furniture from "./Furniture";

const TypeSwitcher = ({ onInvalid, inputs }) => {
  const [type, setType] = useState(null);

  const handleTypeChange = (event) => {
    const { value } = event.target;
    setType(value);
  };
  console.log(inputs);
  return (
    <>
      <div className="form-row">
        <label htmlFor="productType">
          Type Switcher<span className="required">*</span>
        </label>
        <select
          defaultValue=""
          id="productType"
          onChange={handleTypeChange}
          required
          onInvalid={onInvalid}
        >
          <option value="" disabled hidden>
            Type Switcher
          </option>
          <option value="dvd">DVD</option>
          <option value="furniture">Furniture</option>
          <option value="book">Book</option>
        </select>
      </div>
      {type === "dvd" && <Dvd />}
      {type === "furniture" && <Furniture />}
      {type === "book" && <Book />}
    </>
  );
};

export default TypeSwitcher;
