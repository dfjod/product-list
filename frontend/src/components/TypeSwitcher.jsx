import { useState } from "react";
import SpecialAttribute from "./SpecialAttribute";

const TypeSwitcher = () => {
  const [type, setType] = useState(null);

  const handleTypeChange = (event) => {
    const { value } = event.target;
    setType(value);
  };

  return (
    <div className="form-row">
      <label htmlFor="productType">Type Switcher</label>
      <select
        defaultValue="default"
        id="productType"
        onChange={handleTypeChange}
      >
        <option value="default" disabled hidden>
          Type Switcher
        </option>
        <option value="dvd">DVD</option>
        <option value="furniture">Furniture</option>
        <option value="book">Book</option>
      </select>

      <SpecialAttribute type={type} />
    </div>
  );
};

export default TypeSwitcher;
