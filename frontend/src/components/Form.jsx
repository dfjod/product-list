import { useState } from "react";
import FormInput from "./FormInput";
import TypeSwitcher from "./TypeSwitcher";

const Form = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const inputs = [
    {
      keyId: 1,
      label: "SKU",
      id: "sku",
      name: "sku",
      type: "text",
      required: true,
    },
    {
      keyId: 2,
      label: "Name",
      id: "name",
      name: "name",
      type: "text",
      required: true,
    },
    {
      keyId: 3,
      label: "Price($)",
      id: "price",
      name: "price",
      type: "number",
      required: true,
    },
  ];

  const handleInvalid = (event) => {
    const validityState = event.target.validity;
    if (validityState.valueMissing) {
      setErrorMessage("Please, submit required data");
    } else if (validityState.badInput) {
      setErrorMessage("Please, provide the data of indicated type");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = event.target.checkValidity();

    if (isValid) {
      const fd = new FormData(event.target);
      const fdo = Object.fromEntries(fd.entries());

      fetch("http://localhost:3333/add-product", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fdo),
      })
        .then((response) => response.json())
        .then((response) =>
          console.log(`Request succeeded with response: ${response}`)
        )
        .catch((error) => console.log(`Request failed with error: ${error}`));
    }
  };

  return (
    <>
      <form id="product_form" onSubmit={handleSubmit} noValidate>
        {inputs.map((input) => (
          <FormInput key={input.keyId} onInvalid={handleInvalid} {...input} />
        ))}
        <TypeSwitcher onInvalid={handleInvalid} />
      </form>
      {errorMessage ?? (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
    </>
  );
};

export default Form;
