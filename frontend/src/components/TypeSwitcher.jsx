import { useState } from "react";
import ProductInput from "./ProductInput";

const TypeSwitcher = ({ onInvalid, inputs }) => {
  const [category, setCategory] = useState(null);

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setCategory(value);
  };

  return (
    <>
      <div className="form-row">
        <label htmlFor="productType">
          Type Switcher<span className="required">*</span>
        </label>
        <select
          defaultValue=""
          id="productType"
          onChange={handleCategoryChange}
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
      {inputs
        .filter((obj) => obj.category === category)
        .flatMap((attribute) =>
          Object.entries(attribute)
            .filter(([key]) => key !== "category")
            .map(([key, value], index) => (
              <ProductInput key={index} {...value} />
            ))
        )}
    </>
  );
};

export default TypeSwitcher;
