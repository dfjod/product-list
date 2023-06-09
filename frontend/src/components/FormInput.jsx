const FormInput = (props) => {
  const { keyId, label, onInvalid, description, ...inputProps } = props;
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <>
      <div className="form-row">
        <label htmlFor={inputProps.name} className="form-label">
          {capitalizeFirstLetter(label)}
          <span className="required">*</span>
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
