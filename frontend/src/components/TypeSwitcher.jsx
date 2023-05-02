import { useState } from "react";
import FormInput from "./FormInput";

const TypeSwitcher = ({ onInvalid, inputs }) => {
  const [category, setCategory] = useState(null);

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setCategory(value);
  };

  const categories = inputs.flatMap((attribute) =>
    Object.entries(attribute)
      .filter(([key]) => key === "category")
      .map(([key, value]) => value)
  );

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
          {categories.map((category, index) => (
            <option key={index} value={category.toLowerCase()}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {inputs
        .filter((obj) => obj.category.toLowerCase() === category)
        .flatMap((attribute) =>
          Object.entries(attribute)
            .filter(([key]) => key !== "category")
            .map(([key, attribute], index) => (
              <FormInput
                key={index}
                label={`${attribute.label}(${attribute.measurement})`}
                id={attribute.label}
                name={attribute.label}
                type={attribute.type}
                min={attribute.type === "number" ? "0" : ""}
                description={attribute.description}
                onInvalid={onInvalid}
              />
            ))
        )}
      <div className="form-row">
        <input type="text" name="type" defaultValue={category} hidden />
      </div>
    </>
  );
};

export default TypeSwitcher;
