const Product = ({ product }) => {
  const { sku, name, price, category, ...specialAttributes } = product;

  const handleSpecialAttributes = () => {
    if (category === "furniture") {
      return (
        <p>
          Dimension:{specialAttributes.height}x{specialAttributes.width}x
          {specialAttributes.length}
        </p>
      );
    } else {
      return Object.entries(specialAttributes).map(([label, value], index) => (
        <p key={index}>
          {label.charAt(0).toUpperCase() + label.slice(1)}:{value}
        </p>
      ));
    }
  };

  return (
    <>
      <p>{sku}</p>
      <p>{name}</p>
      <p>{price} $</p>
      {handleSpecialAttributes()}
    </>
  );
};

export default Product;
