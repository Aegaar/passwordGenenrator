import React from 'react'
import classes from './PasswordValue.module.css'
import PasswordContext from '../context/PasswordContext'
import { useContext } from 'react'

const PasswordValue = () => {
    const passwordCtx = useContext(PasswordContext)
    console.log(passwordCtx.showedValue)
    return (
        <div className={classes.container}>
            <p>{passwordCtx.showedValue}</p>
            <i className="ri-file-copy-line"></i>
        </div>
      )
}

export default PasswordValue;