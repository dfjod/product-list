import FormInput from "./FormInput";

const TypeSpecificFields = ({ type, onInvalid }) => {
  // Sos objektus var fetchot no backenda
  const types = [
    {
      type: "dvd",
      fields: [
        {
          keyId: 1,
          label: "Size(MB)",
          id: "size",
          name: "size",
          type: "number",
          description: "Please, provide size",
          min: 0,
        },
      ],
    },
    {
      type: "book",
      fields: [
        {
          keyId: 1,
          label: "Weight(KG)",
          id: "weight",
          name: "weight",
          type: "number",
          description: "Please, provide weight",
          min: 0,
        },
      ],
    },
    {
      type: "furniture",
      fields: [
        {
          keyId: 1,
          label: "Height(CM)",
          id: "height",
          name: "height",
          type: "number",
          description: "Please, provide height",
          min: 0,
        },
        {
          keyId: 2,
          label: "Width(CM)",
          id: "width",
          name: "width",
          type: "number",
          description: "Please, provide width",
          min: 0,
        },
        {
          keyId: 3,
          label: "Length(CM)",
          id: "length",
          name: "length",
          type: "number",
          description: "Please, provide length",
          min: 0,
        },
      ],
    },
  ];

  const { fields } = types.find((obj) => obj.type === type) ?? [];

  return (
    <>
      {fields
        ? fields.map((input) => (
            <FormInput
              key={input.keyId}
              label={input.label}
              {...input}
              onInvalid={onInvalid}
            />
          ))
        : null}
      <input type="text" name="type" defaultValue={type ?? ""} hidden />
    </>
  );
};

export default TypeSpecificFields;
