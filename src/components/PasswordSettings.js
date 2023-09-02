import { useContext } from "react";
import classes from "./PasswordSetting.module.css";
import Slider from "./Slider";
import PasswordCheckboxes from "./PasswordCheckboxes";
import PasswordContext from "../context/PasswordContext";

const PasswordSettings = () => {
  const passwordCtx = useContext(PasswordContext);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    passwordCtx.generatePassword(true);
  };

  return (
    <form
      className={classes["password-configuration-container"]}
      onSubmit={formSubmitHandler}
    >
      <Slider />
      <PasswordCheckboxes />
      <button className={classes["generate-button"]} type="submit">
        Generate
      </button>
    </form>
  );
};

export default PasswordSettings;
