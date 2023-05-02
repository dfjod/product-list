const ProductInput = (props) => {
  return (
    <>
      <FormInput
        key={props.key}
        label={`${props.label}(${props.measurement})`}
        id={props.label}
        name={props.label}
        type={props.type}
        min={props.type === "number" ? "0" : ""}
        description={props.description}
        onInvalid={props.onInvalid}
      />
      <input type="text" name="type" defaultValue={props.category} hidden />
    </>
  );
};

export default ProductInput;
