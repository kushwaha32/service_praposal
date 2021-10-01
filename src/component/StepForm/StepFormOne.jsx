import { RaisedButton, TextField } from "material-ui";
import PrimaryField from "../PrimaryField";
import TextFieldInput from "./TextFieldInput";

const StepFormOne = () => {
  return (
    <div className="step-form-holder">
         <div className="input-wrapper">
             <TextFieldInput placeHolder="Service Name"/>
             <TextFieldInput placeHolder="Store"/>
         </div>
         <div className="input-wrapper">
             <TextFieldInput placeHolder="Address"/>
             <TextFieldInput placeHolder="Province Code"/>
         </div>
         <div className="input-wrapper input-wrapper-3">
             <TextFieldInput placeHolder="City"/>
             <TextFieldInput placeHolder="Postal Code"/>
             <TextFieldInput placeHolder="Fax"/>
         </div>
         <div className="input-wrapper">
             <TextFieldInput placeHolder="Contact"/>
             <TextFieldInput placeHolder="Telephone"/>
         </div>
         <RaisedButton label="Continue" primary={true} style={style}/>
    </div>
  );
};

const style = {
    marginTop: "2rem"
}
export default StepFormOne;
