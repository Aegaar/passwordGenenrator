import React from "react";
import classes from "./PasswordValue.module.css";
import PasswordContext from "../context/PasswordContext";
import { useContext } from "react";

const PasswordValue = () => {
  const passwordCtx = useContext(PasswordContext);

  const copyToClipboard = () => {
    const textToCopy = passwordCtx.showedValue
      ? passwordCtx.showedValue
      : "Click the button to generate password";

    const input = document.createElement("input");
    input.value = textToCopy;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
  };

  return (
    <div className={classes.container} onClick={copyToClipboard}>
      <input
        type="text"
        value={
          passwordCtx.showedValue
            ? passwordCtx.showedValue
            : "Click the button to generate password"
        }
        readOnly
      />
    </div>
  );
};

export default PasswordValue;
