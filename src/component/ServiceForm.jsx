import { useState } from "react";
import PersonalForm from "./PersonalForm";

const ServiceForm = () => {
  const [step, setStep] = useState(1);
  const [serviceName, setServiceName] = useState(1);
  const [store, setStore] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [fax, setFax] = useState("");
  const [contact, setContact] = useState("");
  const [telephone, setTelephone] = useState("");
  // next step
  const nexStep = () => {
    setStep(step + 1);
  };
  // previous Step
  const prevStep = () => {
    setStep(step - 1);
  };
  switch (step) {
    case 1:
      return <PersonalForm />;
    case 2:
      return <h1>this is first step</h1>;
    case 3:
      return <h1>this is first step</h1>;
    case 4:
      return <h1>this is first step</h1>;
      default:
          return <PersonalForm />;
  }

};

export default ServiceForm;
