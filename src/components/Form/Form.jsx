import { useState, useEffect } from "react";

import validations from "./validations";

const Form = ({ onSubmit, onChange, userData }) => {
  const [errors, setErrors] = useState({});

  const fieldsToShowInputs = ["name", "adress", "email"];

  useEffect(() => {
    const userDataValidated = validations(userData);
    setErrors(userDataValidated);
  }, [userData]);

  return (
    <form onSubmit={onSubmit}>
      {fieldsToShowInputs.map((key) => (
        <div key={key}>
          <label htmlFor={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
          </label>
          <br />
          <input
              type={key === "email" ? key : 'text'}
              name={key}
              value={userData[key]}
              onChange={onChange}
              required
            />
          {errors[key] && <p>{errors[key]}</p>}
        </div>
      ))}
      <button type="submit">Confirmar compra</button>
    </form>
  );
};
export default Form;
