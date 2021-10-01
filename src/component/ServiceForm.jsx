import { useState } from "react";
import PersonalForm from "./PersonalForm";
import StepFormFive from "./StepForm/StepFormFive";
import StepFormFour from "./StepForm/StepFormFore";
import StepFormOne from "./StepForm/StepFormOne";
import StepFormThree from "./StepForm/StepFormThree";
import StepFormTwo from "./StepForm/StepFormTwo";

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
      return <StepFormOne nexStep={nexStep} />;
    case 2:
      return <StepFormTwo nexStep={nexStep} prevStep={prevStep} />;
    case 3:
      return <StepFormThree nexStep={nexStep} prevStep={prevStep} />;
    case 4:
      return <StepFormFour nexStep={nexStep} prevStep={prevStep} />;
    case 5:
      return <StepFormFive nexStep={nexStep} prevStep={prevStep} />;
    default:
      return <StepFormOne nexStep={nexStep} />;
  }
};

export default ServiceForm;
