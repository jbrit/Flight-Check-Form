import React, { useState } from "react";
import StartPage from "./StartPage";
import InfoPage from "./InfoPage";
import ReviewPage from "./ReviewPage";
import ConfirmPage from "./ConfirmPage";

const MainForm = () => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationality, setNationality] = useState("");
  const [flightNo, setFlightNo] = useState("");
  const [email, setEmail] = useState("");
  const [passportNo, setPassportNo] = useState("");
  const fields = {
    step,
    firstName,
    lastName,
    flightNo,
    nationality,
    email,
    passportNo,
  };
  const setFields = {
    setStep,
    setFirstName,
    setLastName,
    setFlightNo,
    setNationality,
    setEmail,
    setPassportNo,
  };

  switch (step) {
    case 1:
      return <StartPage fields={fields} setFields={setFields} />;
    case 2:
      return <InfoPage fields={fields} setFields={setFields} />;
    case 3:
      return <ReviewPage fields={fields} setFields={setFields} />;
    case 4:
      return <ConfirmPage />;
    default:
      return <div>Page Not Found</div>;
  }
};

export default MainForm;
