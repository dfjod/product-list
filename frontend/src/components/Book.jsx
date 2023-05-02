import FormInput from "./FormInput";

const Book = ({ onInvalid }) => {
  return (
    <>
      <FormInput
        key="1"
        label="Weight(KG)"
        id="weight"
        name="weight"
        type="number"
        min="0"
        description="Please, provide weight"
        onInvalid={onInvalid}
      />
      <input type="text" name="type" defaultValue="book" hidden />
    </>
  );
};

export default Book;
