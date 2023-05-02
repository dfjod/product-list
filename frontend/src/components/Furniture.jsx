import FormInput from "./FormInput";

const Furniture = ({ onInvalid }) => {
  return (
    <>
      <FormInput
        key="1"
        label="Height(CM)"
        id="height"
        name="height"
        type="number"
        min="0"
        description="Please, provide height"
        onInvalid={onInvalid}
      />
      <FormInput
        key="2"
        label="Width(CM)"
        id="width"
        name="width"
        type="number"
        min="0"
        description="Please, provide width"
        onInvalid={onInvalid}
      />
      <FormInput
        key="3"
        label="Length(CM)"
        id="length"
        name="length"
        type="number"
        min="0"
        description="Please, provide length"
        onInvalid={onInvalid}
      />
      <input type="text" name="type" defaultValue="furniture" hidden />
    </>
  );
};

export default Furniture;
