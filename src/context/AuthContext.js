import { useState,useEffect,createContext } from 'react'
import axios from 'axios'

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{

    const [currentUser,setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    )

    const login = async (inputs) =>{
        const res = await axios.post('/login',inputs)
        setCurrentUser(res.data)
    }

    const logout = async () =>{
        await axios.post('/logout')
        setCurrentUser(null)
    }

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser))
    },[currentUser])

    return(
        <AuthContext.Provider value={{ currentUser,login,logout }}>
            {children}
        </AuthContext.Provider>
    )
}

//double braces mean the contents are props
//localStorage is stored as a string