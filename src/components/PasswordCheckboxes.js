import React from 'react';
import classes from './PasswordCheckboxes.module.css';

const PasswordCheckboxes = () => {
  return (
    <form className={classes['form-controls']}>
      <div className={classes['form-control']}>
        <input
          type="checkbox"
          id="uppercase"
          name="uppercase"
        />
        <label htmlFor="uppercase">Include Uppercase Letters</label>
      </div>

      <div className={classes['form-control']}>
        <input
          type="checkbox"
          id="lowercase"
          name="lowercase"
        />
        <label htmlFor="lowercase">Include Lowercase Letters</label>
      </div>

      <div className={classes['form-control']}>
        <input
          type="checkbox"
          id="numbers"
          name="numbers"
        />
        <label htmlFor="numbers">Include Numbers</label>
      </div>

      <div className={classes['form-control']}>
        <input
          type="checkbox"
          id="symbols"
          name="symbols"
        />
        <label htmlFor="symbols">Include Symbols</label>
      </div>
    </form>
  );
}

export default PasswordCheckboxes;
