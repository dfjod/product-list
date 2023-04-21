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
          required: true,
        },
      ],
      description: "Please, provide size",
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
        },
      ],
      description: "Please, provide weight",
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
        },
        {
          keyId: 2,
          label: "Width(CM)",
          id: "width",
          name: "width",
          type: "number",
        },
        {
          keyId: 3,
          label: "Length(CM)",
          id: "length",
          name: "length",
          type: "number",
        },
      ],
      description: "Please, provide dimensions",
    },
  ];

  const { fields, description } = types.find((obj) => obj.type === type) ?? [];

  return (
    <>
      {fields ? (
        fields.map((input) => (
          <FormInput
            key={input.keyId}
            label={input.label}
            {...input}
            onInvalid={onInvalid}
          />
        ))
      ) : (
        <></>
      )}
      <p>{description}</p>
    </>
  );
};

export default TypeSpecificFields;
