import { Checkbox, TextField } from "material-ui";
import AnimRemoval from "./AnimRemoval";
import Heading from "./Heading";
import  NoLabelForm  from "./NoLabelForm";

const IndustrialForm = () => {
  return (
    <div className="industrial">
      <Heading
        heading="Industrial/Commercial
Service Details"
      />

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
      <p>
        <span>
          Pavement Ants,
          <input type="checkbox" style={{ marginRight: ".8rem" }} />
        </span>
        <span>
          Carpenter Ants,
          <input type="checkbox" style={{ marginRight: ".8rem" }} />
        </span>
        <span>
          Spider,
          <input type="checkbox" style={{ marginRight: ".8rem" }} />
        </span>
      </p>
      <p>
        <span>
          Carpenter Bees,
          <input type="checkbox" style={{ marginRight: ".8rem" }} />
        </span>
        <span>
          Carpet Beetles,
          <input type="checkbox" style={{ marginRight: ".8rem" }} />
        </span>
        <span>
          Centipedes,
          <input type="checkbox" style={{ marginRight: ".8rem" }} />
        </span>
      </p>
      <p>
        <span>
          Fruit Flies,
          <input type="checkbox" style={{ marginRight: ".8rem" }} />
        </span>
        <span>
          House Flies,
          <input type="checkbox" style={{ marginRight: ".8rem" }} />
        </span>
        <span>
          Sow Bugs,
          <input type="checkbox" style={{ marginRight: ".8rem" }} />
        </span>
      </p>
      <p>
        <span>
          Stored Product Pest,
          <input type="checkbox" style={{ marginRight: ".8rem" }}/>
        </span>
        <span>
          Silverfish,
          <input type="checkbox" style={{ marginRight: ".8rem" }}/>
        </span>
        <span>
          Earwigs,
          <input type="checkbox" style={{ marginRight: ".8rem" }}/>
        </span>
      </p>
      <p>
        <span>
          Moths,
          <input type="checkbox" style={{ marginRight: ".8rem" }}/>
        </span>
        <span>
          Wasps,
          <input type="checkbox" style={{ marginRight: ".8rem" }}/>
        </span>
      </p>
      <AnimRemoval heading="Animal Removal, /Wild Life," style={{marginTop:".2rem"}}/>
      <AnimRemoval heading="Bird Control," />
      <AnimRemoval heading="Written Documentation," />
      <AnimRemoval heading="24/7 Emergency Service" />
      <Heading heading="Service Frequency" />
      <p>
        <span>
        Weekly
          <input type="radio" name="serviceFrequency" style={{ marginRight: ".8rem" }}/>
        </span>
        <span>
          Bi Weekly
          <input type="radio" name="serviceFrequency" style={{ marginRight: ".8rem" }}/>
        </span>
        <span>
        Monthly
          <input type="radio" name="serviceFrequency" style={{ marginRight: ".8rem" }}/>
        </span>
      </p>
      <p>
        <span>
        Bi Monthily
          <input type="radio" name="serviceFrequency" style={{ marginRight: ".8rem" }}/>
        </span>
        <span>
        Other
          <input type="radio" name="serviceFrequency" style={{ marginRight: ".8rem" }}/>
        </span>
      </p>
      <Heading heading="Pest Control Tools & Devices" />
      <div className="name-store" style={{padding:"0 .3rem", marginBottom:".2rem"}}>
         <NoLabelForm type="text" placeholder="Insect Monitors" />
         <NoLabelForm type="text" placeholder="Sticky Traps" />
      </div>
      <div className="name-store" style={{padding:"0 .3rem", marginBottom:".2rem"}}>
         <NoLabelForm type="text" placeholder="Insect Monitors" />
         <NoLabelForm type="text" placeholder="Sticky Traps" />
      </div>
      <div className="name-store" style={{padding:"0 .3rem", marginBottom:".2rem"}}>
         <NoLabelForm type="text" placeholder="Insect Monitors" />
         <NoLabelForm type="text" placeholder="Sticky Traps" />
      </div>
      <div className="name-store" style={{padding:"0 .3rem", marginBottom:".2rem"}}>
         <NoLabelForm type="text" placeholder="Insect Monitors" />
         <NoLabelForm type="text" placeholder="Sticky Traps" />
      </div>
      <div className="name-store" style={{padding:"0 .3rem", marginBottom:".2rem"}}>
         <NoLabelForm type="text" placeholder="Insect Monitors" />
         <NoLabelForm type="text" placeholder="Sticky Traps" />
      </div>
    </div>
  );
};

export default IndustrialForm;
