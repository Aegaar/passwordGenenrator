import React, { useContext } from "react";
import classes from "./PasswordCheckboxes.module.css";
import PasswordContext from "../context/PasswordContext";

const PasswordCheckboxes = (props) => {
  const passwordCtx = useContext(PasswordContext);

  const checkboxesHandler = (event) => {
    const newConfig = {
      ...passwordCtx.passwordConfigurationValues,
      [event.target.name]: event.target.checked,
    };
    passwordCtx.updatePasswordConfiguration(newConfig);
  };

  return (
    <div className={classes["form-controls"]}>
      <div className={classes["form-control"]}>
        <input
          type="checkbox"
          id="uppercase"
          name="uppercase"
          onChange={checkboxesHandler}
          defaultChecked
        />
        <label htmlFor="uppercase" className={classes["checkbox-label"]}>
          Include Uppercase Letters
        </label>
      </div>

      <div className={classes["form-control"]}>
        <input
          type="checkbox"
          id="lowercase"
          name="lowercase"
          onChange={checkboxesHandler}
          defaultChecked
        />
        <label htmlFor="lowercase" className={classes["checkbox-label"]}>
          Include Lowercase Letters
        </label>
      </div>

      <div className={classes["form-control"]}>
        <input
          type="checkbox"
          id="numbers"
          name="numbers"
          onChange={checkboxesHandler}
          defaultChecked
        />
        <label htmlFor="numbers" className={classes["checkbox-label"]}>
          Include Numbers
        </label>
      </div>

      <div className={classes["form-control"]}>
        <input
          type="checkbox"
          id="symbols"
          name="symbols"
          onChange={checkboxesHandler}
          defaultChecked
        />
        <label htmlFor="symbols" className={classes["checkbox-label"]}>
          Include Symbols
        </label>
      </div>
    </div>
  );
};

export default PasswordCheckboxes;
