import { useState, useRef } from "react";
import Input from "../components/Input";
import TypeSwitcher from "../components/TypeSwitcher";

const ProductForm = () => {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
    return fetch("add-product", {
      method: "POST",
      headers: "Content-Type: application/json",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((jsonResponse) => console.log(jsonResponse))
      .catch((e) => console.log(e));
  };

  return (
    <form ref={formRef} id="product_form" onSubmit={handleSubmit}>
      <Input text="SKU" id="sku" inputType="text" />

      <Input text="Name" id="name" inputType="text" />

      <Input text="Price($)" id="price" inputType="number" />

      <TypeSwitcher />
    </form>
  );
};

export default ProductForm;
