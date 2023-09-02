import { createContext} from "react";


const PasswordContext = createContext({
    length: 5,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
})

export default PasswordContext