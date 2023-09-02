import React, { useState } from 'react'
import PasswordContext from './PasswordContext'

const generatePasswordHandler = () => {
    console.log('tests')
}


const PasswordProvider = (props) => {
const [passwordConfigurationValues, setPasswordConfigurationValues] = useState(
    {
        length: 5,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
    }
)


const updatePasswordConfiguration = (newConfig) => {
    setPasswordConfigurationValues(newConfig);
  };


  return (
    <PasswordContext.Provider value={{
        passwordConfigurationValues,
        updatePasswordConfiguration,
        generatePassword: generatePasswordHandler, 
      }}>
        {props.children}
    </PasswordContext.Provider>
  )
}

export default PasswordProvider