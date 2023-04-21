const Product = ({ product }) => {
  const extractAttributes = ({ special_values }) => {
    const attributeArray = special_values.split(";");
    const attributeObject = {};

    attributeArray.forEach((attribute) => {
      const [key, value] = attribute.split(":");
      attributeObject[key] = value;
    });
    return attributeObject;
  };

  const setAttribute = (product) => {
    const attributes = extractAttributes(product);

    if (product.category_name === "furniture") {
      return (
        <p>
          {attributes.height}X{attributes.width}X{attributes.length}
        </p>
      );
    }
    if (product.category_name === "dvd") {
      return <p>{attributes.size} MB</p>;
    }
    if (product.category_name === "book") {
      return <p>{attributes.weight} KG</p>;
    }
  };

  return (
    <>
      <p>{product.sku}</p>
      <p>{product.name}</p>
      <p>{product.price} $</p>
      {setAttribute(product)}
    </>
  );
};

export default Product;
