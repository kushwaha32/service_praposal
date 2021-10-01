
import { RaisedButton } from "material-ui";
import Heading from "../Heading";
import NoLabelForm from "../NoLabelForm";
import TextFieldInput from "./TextFieldInput";

const StepFormFive = ({ prevStep, nexStep }) => {
  return (
    <div className="step-form-holder">
      <Heading heading="Residential / Apartments Buildings" />
      <Heading heading="Additional Details Of Services :" />
      
      <textarea name="w3review" rows="10" cols="45"></textarea>
    
      <Heading heading="Additional Details Of Services :" />
      <TextFieldInput placeHolder="Per Month"/>
      <TextFieldInput placeHolder="Per Month"/>
      <TextFieldInput placeHolder="Per Month"/>
      <TextFieldInput placeHolder="Per Month"/>
      <div style={{ width: "100%", textAlign: "right" }}>
        <RaisedButton
          label="Submit"
          primary={true}
          style={style}
        />
        <RaisedButton
          label="back"
          style={style}
          style={{ marginLeft: "1rem" }}
          onClick={() => prevStep()}
        />
      </div>
    </div>
  );
};
const style = {
  marginTop: "2rem",
};
export default StepFormFive;
