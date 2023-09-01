import {useState, useEffect} from 'react';
import classes from './Slider.module.css';

const Slider = (props) => {
    const [passwordLength, setPasswordLength] = useState(5);

    useEffect(() => {
        console.log(passwordLength);
      }, [passwordLength]);

    const changeHandler = (event) => {
        setPasswordLength(event.target.value)
    }

  return (
    <div className={classes.sliderContainer}>
      <div className={classes.lengthContainer}>
        <h2>Długość znaków</h2>
        <p>{passwordLength}</p>
      </div>
      <input
        type="range"
        min="5"
        max="40"
        defaultValue="5"
        className={classes.slider}
        id={classes.passwordLength}
        onChange={changeHandler}
      />
    </div>
  );
};

export default Slider;
