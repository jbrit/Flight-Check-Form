import React from "react";
import countryList from "./country-list";

const StartPage = ({ fields, setFields }) => {
  const { step, lastName, firstName, nationality } = fields;
  const { setStep, setFirstName, setNationality } = setFields;
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="mb-8 text-lg font-bold">Hi, Mr {lastName}</div>
      <label>First Name:</label>

      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <label>Last Name:</label>

      <input type="text" value={lastName} disabled readOnly={true} />

      <label>Nationality:</label>

      <select
        value={nationality}
        onChange={(e) => setNationality(e.target.value)}
      >
        <option value="" disabled hidden></option>
        {countryList.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <div className="flex justify-between mt-8">
        <button onClick={() => setStep(step - 1)}>Back</button>
        <button onClick={() => setStep(step + 1)}>Next</button>
      </div>
    </div>
  );
};

export default StartPage;
