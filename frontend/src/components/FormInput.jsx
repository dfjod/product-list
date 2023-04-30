const FormInput = (props) => {
  const { keyId, label, onInvalid, description, ...inputProps } = props;

  return (
    <>
      <div className="form-row">
        <label htmlFor={inputProps.name} className="form-label">
          {label}
        </label>
        <input
          className="form-input"
          {...inputProps}
          onInvalid={onInvalid}
          required
        />
      </div>
      {description && <p className="form-row description">{description}</p>}
    </>
  );
};

export default FormInput;
