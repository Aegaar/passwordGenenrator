import React, { useState } from 'react';
import classes from './PasswordSetting.module.css';
import Slider from './Slider';
import PasswordCheckboxes from './PasswordCheckboxes';
import useForm from '../hooks/useForm';

const PasswordSettings = () => {
  const [passwordLength, setPasswordLength] = useState(5);

   const [values, setValues] = useForm({
        length: 5,
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
    })


  const passwordLengthHandler = (event) => {
    setPasswordLength(event.target.value);
    console.log("Aktualna wartość passwordLength:", passwordLength);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event)
    
  };

  const getCheckboxesValues = (event) => {
    console.log(event)
  }


  return (
    <div className={classes.container}>
        
    <form className={classes['password-configuration-container']} onSubmit={formSubmitHandler}>
      <Slider onChange={passwordLengthHandler}/>
      <PasswordCheckboxes onCheckbox={getCheckboxesValues} />

      <button className={classes['generate-button']} type='submit' >Generate</button>
      </form>
     {/* <div className={classes.generate}>
     
     </div> */}
    </div>
  );
}


export default PasswordSettings;
