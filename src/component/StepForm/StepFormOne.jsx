import { RaisedButton, TextField } from "material-ui";
import Heading from "../Heading";
import TextFieldInput from "./TextFieldInput";

const StepFormOne = ({nexStep}) => {
  return (
    <div className="step-form-holder">
           <Heading heading="Service Form" />
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
         <div style={{width:"100%", textAlign:"right"}}>
          <RaisedButton label="Continue" primary={true} style={style} onClick={()=> nexStep()}/>   
         </div>
    </div>
  );
};

const style = {
    marginTop: "2rem"
}
export default StepFormOne;
