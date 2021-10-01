import { RaisedButton } from "material-ui";
import Heading from "../Heading";
import NoLabelForm from "../NoLabelForm";

const StepFormThree = ({prevStep, nexStep}) => {
  return (
    <div className="step-form-holder">
      <Heading heading="Industrial/Commercial Service Details" />
      <Heading heading="Pest Control Tools & Devices" />
      <div
        className="name-store"
        style={{ padding: "0 .3rem", marginTop:"1rem" }}
      >
        <NoLabelForm type="text" placeholder="Insect Monitors" />
        <NoLabelForm type="text" placeholder="Sticky Traps" />
      </div>
      <div
        className="name-store"
        style={{ padding: "0 .3rem", marginTop:"1rem" }}
      >
        <NoLabelForm type="text" placeholder="Insect Monitors" />
        <NoLabelForm type="text" placeholder="Sticky Traps" />
      </div>
      <div
        className="name-store"
        style={{ padding: "0 .3rem", marginTop:"1rem" }}
      >
        <NoLabelForm type="text" placeholder="Insect Monitors" />
        <NoLabelForm type="text" placeholder="Sticky Traps" />
      </div>
      <div
        className="name-store"
        style={{ padding: "0 .3rem", marginTop:"1rem" }}
      >
        <NoLabelForm type="text" placeholder="Insect Monitors" />
        <NoLabelForm type="text" placeholder="Sticky Traps" />
      </div>
      <div
        className="name-store"
        style={{ padding: "0 .3rem", marginTop:"1rem" }}
      >
        <NoLabelForm type="text" placeholder="Insect Monitors" />
        <NoLabelForm type="text" placeholder="Sticky Traps" />
      </div>
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
          style={{marginLeft:"1rem"}}
          onClick={() => prevStep()}
        />
      </div>
    </div>
  );
};
const style = {
    marginTop: "2rem"
}
export default StepFormThree;
