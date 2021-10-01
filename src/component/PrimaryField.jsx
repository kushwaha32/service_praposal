
import SingleForm from "./SingleForm";

const PrimaryField = () => {
  return (
    <>
      <div className="name-store" style={style}>
        <SingleForm
          label="Service Name"
          placeholder="Service Name"
          type="text"
        />
        <SingleForm label="Store" placeholder="Store" type="text" />
      </div>
      <div className="name-store" style={style}>
        <SingleForm label="Address" placeholder="Address" type="text" />
        <SingleForm
          label="Province Code"
          placeholder="Province Code"
          type="text"
        />
      </div>
      <div className="name-store" style={style}>
        <SingleForm label="City" placeholder="City" type="text" />
        <SingleForm label="Postal Code" placeholder="Postal Code" type="text" />
      </div>
      <div className="name-store" style={style}>
        <SingleForm label="Contact" placeholder="Contact" type="text" />
        <SingleForm label="Telephone" placeholder="Telephone" type="text" />
      </div>
      <div className="name-store" style={style}>
        <SingleForm label="Fax" placeholder="Fax" type="text" />
      </div>
    </>
  );
};

const style={
     marginTop:"1rem"
}
export default PrimaryField;
