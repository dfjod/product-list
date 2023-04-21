const FormInput = (props) => {
  const { keyId, label, onInvalid, ...inputProps } = props;

  return (
    <div className="form-row">
      <label htmlFor={inputProps.name}>{label}</label>
      <input {...inputProps} onInvalid={onInvalid} />
    </div>
  );
};

export default FormInput;
