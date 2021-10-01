
import React from "react";
import HeaderForm from "./HeaderForm";
import IndustrialForm from "./IndustrialForm";
import PrimaryField from "./PrimaryField";
import ResidentialForm from "./ResidentialForm";

const PersonalForm = () => {
  return (
      <div className="from-container-in">
        <HeaderForm />
        <PrimaryField />
        <div className="industrial-residential">
          <IndustrialForm />
          <ResidentialForm />
        </div>
      </div>
  );
};

export default PersonalForm;
