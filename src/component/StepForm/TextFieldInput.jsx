import { TextField } from "material-ui";

const TextFieldInput = ({ placeHolder }) => {
  return (
    <TextField
      style={{ width: "100%" }}
      hintText={placeHolder}
      floatingLabelText={placeHolder}
    />
  );
};

export default TextFieldInput;
