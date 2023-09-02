import { useContext } from 'react';
import classes from './PasswordSetting.module.css';
import Slider from './Slider';
import PasswordCheckboxes from './PasswordCheckboxes';
import PasswordContext from "../context/PasswordContext";

const PasswordSettings = () => {
  const passwordCtx = useContext(PasswordContext);
  //  const [values, setValues] = useForm({
  //       length: 5,
  //       uppercase: false,
  //       lowercase: false,
  //       numbers: false,
  //       symbols: false,
  //   })

// usePasswordContext('tesdads')


  // const passwordLengthHandler = (event) => {
  //   setPasswordLength(event.target.value);
  //   console.log("Aktualna wartość passwordLength:", passwordLength);
  // };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(values)
    passwordCtx.generatePassword(true)
    
  };

  // const getCheckboxesValues = (event) => {
    
  // }


  return (
    <div className={classes.container}>
        
    <form className={classes['password-configuration-container']} onSubmit={formSubmitHandler}>
      <Slider/>
      <PasswordCheckboxes/>

      <button className={classes['generate-button']} type='submit' >Generate</button>
      </form>
     {/* <div className={classes.generate}>
     
     </div> */}
    </div>
  );
}


export default PasswordSettings;
