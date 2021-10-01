import { RaisedButton } from "material-ui";
import Heading from "../Heading";
import NoLabelForm from "../NoLabelForm";
import TextFieldInput from "./TextFieldInput";

const StepFormFour = ({ prevStep, nexStep }) => {
  return (
    <div className="step-form-holder">
      <Heading heading="Residential / Apartments Buildings" />
      <Heading heading="Services Details:" />
      <Heading
        heading="Regular Pest Control For
        Common Areas 
        "
      />
      <TextFieldInput placeHolder="Monthly($)" />
      <Heading
        heading="Per Apartment Charges :
        "
      />
      <TextFieldInput placeHolder="Mice/Rats($)" />
      <TextFieldInput placeHolder="Cockroaches($)" />
      <TextFieldInput placeHolder="Bed Bugs($)" />
      <div style={{ width: "100%", textAlign: "right" }}>
        <RaisedButton
          label="Continue"
          primary={true}
          style={style}
          onClick={() => nexStep()}
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
export default StepFormFour;
