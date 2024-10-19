import { createContext, useState } from "react";

export const PortContext = createContext();

const PortContextProvider = ({children}) => {
    const url = "http://localhost:4000"
    const [token, setToken] = useState(""); 

    const contextValue = {
        url,
        token,
        setToken
    };

    return (
        <PortContext.Provider value={contextValue}>
            {children}
        </PortContext.Provider>
    );
}

export default PortContextProvider;
