let ProductList = (props) => {
  let productList = [];

  props.forEach(product => {
    productList.push(
      <div className="product">
        <p>{product.sku}</p>
        <p>{product.name}</p>
        <p>{product.price} $</p>
      </div>
    );
  })

  return (
    <div className="product-list">
      {productList}
    </div>
  )
}

export default ProductList;