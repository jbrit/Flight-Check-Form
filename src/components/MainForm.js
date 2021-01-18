import React, { useState } from "react";
import StartPage from "./StartPage";
import InfoPage from "./InfoPage";
import ReviewPage from "./ReviewPage";

const MainForm = () => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationality, setNationality] = useState("");
  const [flightNo, setFlightNo] = useState("");
  const fields = {
    step,
    firstName,
    lastName,
    flightNo,
    nationality,
  };
  const setFields = {
    setStep,
    setFirstName,
    setLastName,
    setFlightNo,
    setNationality,
  };

  switch (step) {
    case 1:
      return <StartPage fields={fields} setFields={setFields} />;
    case 2:
      return <InfoPage fields={fields} setFields={setFields} />;
    case 3:
      return <ReviewPage fields={fields} setFields={setFields} />;
    default:
      return <div>Page Not Found</div>;
  }
};

export default MainForm;
