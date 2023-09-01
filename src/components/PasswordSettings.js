import React, { useState } from 'react';
import classes from './PasswordSetting.module.css';
import Slider from './Slider';

const PasswordSettings = () => {
  const [passwordLength, setPasswordLength] = useState(5);

  const passwordLengthHandler = (event) => {
    setPasswordLength(event.target.value);
    console.log("Aktualna wartość passwordLength:", passwordLength);
  };

  return (
    <div className={classes.passwordConfigurationContainer}>
      <Slider onChange={passwordLengthHandler}/>
    </div>
  );
};

export default PasswordSettings;
