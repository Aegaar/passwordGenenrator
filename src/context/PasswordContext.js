import { createContext} from "react";


const PasswordContext = createContext({
    length: 5,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
})

export default PasswordContext