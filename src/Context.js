import { createContext } from "react";


const MyContext = createContext()

const MyContextProvider =  ({children})=>{
    const contextValue = { name: "Alice", age: 30 };
    return( <MyContext.Provider value={contextValue}>
        {children}
    </MyContext.Provider>)
}

export {MyContext,MyContextProvider};