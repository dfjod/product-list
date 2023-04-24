const FormInput = (props) => {
  const { keyId, label, onInvalid, description, ...inputProps } = props;

  return (
    <div className="form-row">
      <label htmlFor={inputProps.name}>{label}</label>
      <input {...inputProps} onInvalid={onInvalid} />
      {description ?? <p>{description}</p>}
    </div>
  );
};

export default FormInput;
