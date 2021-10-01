import { RaisedButton } from "material-ui";
import AnimRemoval from "../AnimRemoval";
import Heading from "../Heading";

const StepFormTwo = ({nexStep, prevStep}) => {
  return (
    <div className="step-form-holder">
      <Heading heading="Industrial/Commercial Service Details" />
      <Heading heading="Pest Covered" />
      <p>
        <span>
          Mise,
          <input type="checkbox" style={{ marginRight: ".8rem" }} />
        </span>
        <span>
          Rats,
          <input type="checkbox" style={{ marginRight: ".8rem" }} />
        </span>
        <span>
          Cockroaches,
          <input type="checkbox" style={{ marginRight: ".8rem" }} />
        </span>
      </p>
      <AnimRemoval
        heading="Animal Removal, /Wild Life,"
        style={{ marginTop: ".2rem" }}
      />
      <AnimRemoval heading="Bird Control," />
      <AnimRemoval heading="Written Documentation," />
      <AnimRemoval heading="24/7 Emergency Service" />
      <Heading heading="Service Frequency" />
      <p>
        <span>
          Weekly
          <input
            type="radio"
            name="serviceFrequency"
            style={{ marginRight: ".8rem" }}
          />
        </span>
        <span>
          Bi Weekly
          <input
            type="radio"
            name="serviceFrequency"
            style={{ marginRight: ".8rem" }}
          />
        </span>
        <span>
          Monthly
          <input
            type="radio"
            name="serviceFrequency"
            style={{ marginRight: ".8rem" }}
          />
        </span>
      </p>
      <p>
        <span>
          Bi Monthily
          <input
            type="radio"
            name="serviceFrequency"
            style={{ marginRight: ".8rem" }}
          />
        </span>
        <span>
          Other
          <input
            type="radio"
            name="serviceFrequency"
            style={{ marginRight: ".8rem" }}
          />
        </span>
      </p>
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
export default StepFormTwo;
