import { useState } from "react";

const Input = ({ id, text, inputType }) => {
  const [error, setError] = useState("");

  const handleInvalid = (event) => {
    const validityState = event.target.validity;

    if (validityState.valueMissing) {
      event.target.setCustomValidity("");
      setError("Please, submit required data");
    } else if (validityState.typeMismatch) {
      setError("Please, provide the data of indicated type");
    } else {
      setError("");
    }
  };
  return (
    <div className="form-row">
      <label htmlFor={id}>{text}</label>
      <input
        required={true}
        type={inputType}
        id={id}
        onInvalid={handleInvalid}
      />
      {error}
    </div>
  );
};

export default Input;
