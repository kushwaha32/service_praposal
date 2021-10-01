import { TextField } from "material-ui";
import SingleForm from "./SingleForm";

const PrimaryField = () => {
  return (
    <>
      <div className="name-store" style={{ marginTop: ".2rem" }}>
        <SingleForm
          label="Service Name"
          placeholder="Service Name"
          type="text"
        />
        <SingleForm label="Store" placeholder="Store" type="text" />
      </div>
      <div className="name-store" style={{ marginTop: ".2rem" }}>
        <SingleForm label="Address" placeholder="Address" type="text" />
        <SingleForm
          label="Province Code"
          placeholder="Province Code"
          type="text"
        />
      </div>
      <div className="name-store" style={{ marginTop: ".2rem" }}>
        <SingleForm label="City" placeholder="City" type="text" />
        <SingleForm label="Postal Code" placeholder="Postal Code" type="text" />
      </div>
      <div className="name-store" style={{ marginTop: ".2rem" }}>
        <SingleForm label="Contact" placeholder="Contact" type="text" />
        <SingleForm label="Telephone" placeholder="Telephone" type="text" />
      </div>
      <div className="name-store" style={{ marginTop: ".2rem" }}>
        <SingleForm label="Fax" placeholder="Fax" type="text" />
      </div>
    </>
  );
};

export default PrimaryField;
