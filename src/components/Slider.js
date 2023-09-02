import { useContext, useState } from "react";
import classes from "./Slider.module.css";
import PasswordContext from "../context/PasswordContext";

const Slider = (props) => {
  const passwordCtx = useContext(PasswordContext);

  console.log(passwordCtx);
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
    console.log(passwordCtx.passwordConfigurationValues.length);
  };

  return (
    <div className={classes.sliderContainer}>
      <div className={classes.lengthContainer}>
        <h2>Długość znaków</h2>
        <p>{length}</p>
      </div>
      <input
        type="range"
        min="5"
        max="40"
        value={length} 
        className={classes.slider}
        id={classes.passwordLength}
        onChange={changeHandler}
      />
    </div>
  );
};

export default Slider;
