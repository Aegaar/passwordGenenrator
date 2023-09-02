import { useContext, useState } from "react";
import classes from "./Slider.module.css";
import PasswordContext from "../context/PasswordContext";

const Slider = (props) => {
  const passwordCtx = useContext(PasswordContext);

  const [length, setLength] = useState(
    passwordCtx.passwordConfigurationValues.length
  );

  const changeHandler = (event) => {
    const newLength = parseInt(event.target.value);
    setLength(newLength);
    const newConfig = {
      ...passwordCtx.passwordConfigurationValues,
      length: newLength,
    };
    passwordCtx.updatePasswordConfiguration(newConfig);
  };

  return (
    <div className={classes["slider-container"]}>
      <div className={classes["length-container"]}>
        <h2>Password Length</h2>
        <p>{length}</p>
      </div>
      <input
        type="range"
        min="5"
        max="30"
        value={length}
        className={classes.slider}
        id={classes["password-length"]}
        onChange={changeHandler}
      />
    </div>
  );
};

export default Slider;
