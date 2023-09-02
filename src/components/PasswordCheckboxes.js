import React, { useState, useContext } from "react";
import classes from "./PasswordCheckboxes.module.css";
// import { useEffect } from "react";
import PasswordContext from "../context/PasswordContext";

const PasswordCheckboxes = (props) => {
  const passwordCtx = useContext(PasswordContext);
  console.log(passwordCtx.passwordConfigurationValues);

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
        <label htmlFor="uppercase">Include Uppercase Letters</label>
      </div>

      <div className={classes["form-control"]}>
        <input
          type="checkbox"
          id="lowercase"
          name="lowercase"
          onChange={checkboxesHandler}
          defaultChecked
        />
        <label htmlFor="lowercase">Include Lowercase Letters</label>
      </div>

      <div className={classes["form-control"]}>
        <input
          type="checkbox"
          id="numbers"
          name="numbers"
          onChange={checkboxesHandler}
          defaultChecked
        />
        <label htmlFor="numbers">Include Numbers</label>
      </div>

      <div className={classes["form-control"]}>
        <input
          type="checkbox"
          id="symbols"
          name="symbols"
          onChange={checkboxesHandler}
          defaultChecked
        />
        <label htmlFor="symbols">Include Symbols</label>
      </div>
    </div>
  );
};

export default PasswordCheckboxes;
