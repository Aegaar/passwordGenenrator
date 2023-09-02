import React, { useState, useEffect } from "react";
import PasswordContext from "./PasswordContext";

const generatePasswordHandler = (
  passwordConfigurationValues,
  createPassword
) => {
  console.log(passwordConfigurationValues);
  let charset = "";
  if (passwordConfigurationValues.uppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (passwordConfigurationValues.lowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (passwordConfigurationValues.numbers) {
    charset += "0123456789";
  }
  if (passwordConfigurationValues.symbols) {
    charset += "!@#$%^&*";
  }

  let showedValue = "";

  if (!createPassword) {
    if (!charset) {
      showedValue = "You must choose some checkbox";
    } else {
      showedValue = "Click the button to generate password";
    }
  }

  if (createPassword) {
    if (charset) {
      const passwordLength = passwordConfigurationValues.length;
      for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        showedValue += charset.charAt(randomIndex);
      }
    } else {
      showedValue = "You must choose some checkbox";
    }
    
  }
  return showedValue;
};

const PasswordProvider = (props) => {
  const [passwordConfigurationValues, setPasswordConfigurationValues] =
    useState({
      length: 5,
      uppercase: false,
      lowercase: false,
      numbers: false,
      symbols: false,
    });

  const [createPassword, setCreatePassword] = useState(false);
  const [showedValue, setShowedValue] = useState("");

  const updatePasswordConfiguration = (newConfig) => {
    setPasswordConfigurationValues(newConfig);
  };

  const generatePassword = () => {
    setCreatePassword(true);
  };

  useEffect(() => {
    if (createPassword) {
      const generatedValue = generatePasswordHandler(
        passwordConfigurationValues,
        true
      );
      setShowedValue(generatedValue);

      setCreatePassword(false);
    }
  }, [createPassword, passwordConfigurationValues]);

  return (
    <PasswordContext.Provider
      value={{
        passwordConfigurationValues,
        updatePasswordConfiguration,
        generatePassword,
        showedValue,
      }}
    >
      {props.children}
    </PasswordContext.Provider>
  );
};

export default PasswordProvider;
