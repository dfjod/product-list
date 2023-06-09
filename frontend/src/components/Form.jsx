import { useState, useEffect } from "react";
import FormInput from "./FormInput";
import TypeSwitcher from "./TypeSwitcher";
import { origin } from "../utils/origin";

const Form = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [inputs, setInputs] = useState([]);

  const fetchInputs = async () => {
    const response = await fetch(`${origin}/add-product`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const dataArray = Object.keys(data).map((key) => {
      return {
        category: key,
        ...data[key],
      };
    });

    setInputs(dataArray);
  };

  useEffect(() => {
    fetchInputs();
  }, []);

  const handleInvalid = (event) => {
    const validityState = event.target.validity;
    if (validityState.valueMissing) {
      setErrorMessage("Please, submit required data");
    } else if (validityState.badInput) {
      setErrorMessage("Please, provide the data of indicated type");
    } else if (validityState.rangeUnderflow) {
      setErrorMessage("Negative values are not allowed");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = event.target.checkValidity();

    if (isValid) {
      const fd = new FormData(event.target);
      const fdo = Object.fromEntries(fd.entries());

      const response = await fetch(`${origin}/add-product`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fdo),
      });
      const data = await response.json();
      if (!data.success) {
        setErrorMessage(data.message);
        return;
      }
      console.log(response.message);
      window.location.href = "/";
    }
  };

  return (
    <>
      <form id="product_form" onSubmit={handleSubmit} noValidate>
        <div className="input-fields">
          <FormInput
            key="1"
            label="SKU"
            id="sku"
            name="sku"
            type="text"
            onInvalid={handleInvalid}
          />
          <FormInput
            key="2"
            label="Name"
            id="name"
            name="name"
            type="text"
            onInvalid={handleInvalid}
          />
          <FormInput
            key="3"
            label="Price"
            id="price"
            name="price"
            type="number"
            min="0"
            onInvalid={handleInvalid}
          />
          <TypeSwitcher onInvalid={handleInvalid} inputs={inputs} />
        </div>
      </form>
      {errorMessage && (
        <div className="form-error">
          <p>{errorMessage}</p>
        </div>
      )}
    </>
  );
};

export default Form;
