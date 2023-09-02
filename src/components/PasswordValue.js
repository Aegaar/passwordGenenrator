import React from 'react'
import classes from './PasswordValue.module.css'
import PasswordContext from '../context/PasswordContext'
import { useContext } from 'react'

const PasswordValue = () => {
    const passwordCtx = useContext(PasswordContext)
    
    const copyToClipboard = () => {
        const input = document.querySelector('input[type="text"]');
        input.select();
        document.execCommand('copy');
        input.setSelectionRange(0, 0);
      };

    return (
        <div className={classes.container} onClick={copyToClipboard}>
            <input type="text" value={passwordCtx.showedValue ? passwordCtx.showedValue : 'Click the button to generate password'} readOnly/>
        </div>
      )
}

export default PasswordValue;