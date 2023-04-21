import Input from "./Input";

const SpecialAttribute = ({ type }) => {
  if (type === "dvd") {
    return <Input text="Size(MB)" id="size" />;
  }

  if (type === "furniture") {
    return (
      <>
        <Input text="Height(CM)" id="height" />
        <Input text="Width(CM)" id="width" />
        <Input text="Length(CM)" id="length" />
      </>
    );
  }

  if (type === "book") {
    return <Input text="Weight(KG)" id="weight" />;
  }
};

export default SpecialAttribute;
