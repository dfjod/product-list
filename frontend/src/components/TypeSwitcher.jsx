import { useState } from "react";
import TypeSpecificFields from "./TypeSpecificFields";

const TypeSwitcher = ({ onInvalid }) => {
  const [type, setType] = useState(null);

  const handleTypeChange = (event) => {
    const { value } = event.target;
    setType(value);
  };

  return (
    <div className="form-row">
      <label htmlFor="productType">Type Switcher</label>
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

      <TypeSpecificFields type={type} onInvalid={onInvalid} />
    </div>
  );
};

export default TypeSwitcher;
