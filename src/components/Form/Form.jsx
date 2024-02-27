import { useState, useEffect } from "react";

import validations from "./validations";

const Form = ({ onSubmit, onChange, userData }) => {
  const [errors, setErrors] = useState({});
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const fieldsToShowInputs = ["name", "adress", "email"];

  useEffect(() => {
    const userDataValidated = validations(userData);
    setErrors(userDataValidated);
    const hasErrors = Object.values(userDataValidated).some((error) => error);
    setIsSubmitDisabled(hasErrors);
  }, [userData]);

  return (
    <form onSubmit={onSubmit}>
      {fieldsToShowInputs.map((key) => (
        <div key={key}>
          <input
              type={key === "email" ? key : 'text'}
              name={key}
              value={userData[key]}
              onChange={onChange}
              required
              placeholder={`${key.charAt(0).toUpperCase() + key.slice(1)}: `}
            />
          {errors[key] && <p>{errors[key]}</p>}
        </div>
      ))}
      <button type="submit" className={isSubmitDisabled ? "disabled-button" : "submit-button"} disabled={isSubmitDisabled}>Confirmar compra</button>
    </form>
  );
};
export default Form;
