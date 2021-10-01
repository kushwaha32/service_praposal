
import { RaisedButton } from "material-ui";
import Heading from "./Heading";
import SingleForm from "./SingleForm";

const ResidentialForm = () => {
  return (
    <div className="residential">
      <Heading
        heading="Residential / Apartments Buildings
        Services Details: 
        "
      />
      <Heading
        heading="Regular Pest Control For
        Common Areas 
        "
      />
      <SingleForm type="text" label="Monthly($)" placeholder="Monthly($)" />
      <Heading
        heading="Per Apartment Charges : 
        "
      />
      <SingleForm
        type="text"
        label="Mice/Rats($)"
        placeholder="Mice/Rats($)"
        style={{ marginBottom: ".5rem" }}
      />
      <SingleForm
        type="text"
        label="Cockroaches"
        placeholder="Cockroaches/Flies/Ants"
        style={{ marginBottom: ".5rem" }}
      />
      <SingleForm type="text" label="Bed Bugs" placeholder="Bed Bugs" />

      <Heading
        heading="Additional Details Of Services : 
        "
      />
      <textarea name="w3review" rows="10" cols="45"></textarea>
      <Heading
        heading="Optional Services : 
        "
      />
      <SingleForm
        type="text"
        label="Per Month"
        placeholder="Per Month"
        style={{ marginBottom: ".5rem" }}
      />
      <SingleForm
        type="text"
        label="Per Month"
        placeholder="Per Month"
        style={{ marginBottom: ".5rem" }}
      />
      <SingleForm
        type="text"
        label="Per Month"
        placeholder="Per Month"
        style={{ marginBottom: ".5rem" }}
      />
      <SingleForm type="text" label="Per Month" placeholder="Per Month" />
      <RaisedButton label="Submit" primary={true} style={{marginTop:"1rem"}}/>
    </div>
  );
};

export default ResidentialForm;
