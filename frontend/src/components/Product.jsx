const Product = ({ product }) => {
  return (
    <>
      <p>{product.sku}</p>
      <p>{product.name}</p>
      <p>{product.price} $</p>
    </>
  );
};

export default Product;
