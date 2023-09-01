import React, { useState } from 'react';
import classes from './PasswordSetting.module.css';
import Slider from './Slider';
import PasswordCheckboxes from './PasswordCheckboxes';

const PasswordSettings = () => {
  const [passwordLength, setPasswordLength] = useState(5);

  const passwordLengthHandler = (event) => {
    setPasswordLength(event.target.value);
    console.log("Aktualna wartość passwordLength:", passwordLength);
  };

  return (
    <div className={classes.container}>
        
    <div className={classes['password-configuration-container']}>
      <Slider onChange={passwordLengthHandler}/>
      <PasswordCheckboxes/>
      </div>
     <div className={classes.generate}>
     <button className={classes['generate-button']}>Generate</button>
     </div>
    </div>
  );
};

export default PasswordSettings;
