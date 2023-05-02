import FormInput from "./FormInput";

const Dvd = ({ onInvalid }) => {
  return (
    <>
      <FormInput
        key="1"
        label="Size(MB)"
        id="size"
        name="size"
        type="number"
        min="0"
        description="Please, provide size"
        onInvalid={onInvalid}
      />
      <input type="text" name="type" defaultValue="dvd" hidden />
    </>
  );
};

export default Dvd;
