import React, { useEffect } from 'react'
import { createContext, useContext, useState } from 'react'

const userContext = createContext()
const authContext = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading]=useState(true)

    useEffect(() => {
        const verifyUser =async () => {
            try {
                const token = localStorage.getItem('token')
                if(token) {
                    const response = await axios.get('https://coaching-management-system-9w2s.onrender.com/api/auth/verify',{
                        "Authorization" : `Bearer ${token}`
                    })
                    if(response.data.success){
                        setUser(response.data.user)
                    }
                }else{
                    setUser(null)
                }
            }
            catch(error){
                if(error.response && !error.response.data.error) {
                    setUser(null)
                }
            } finally{
                setLoading(false)
            }
        }
        verifyUser()
    }, [])
    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("token")
    }
  return (
    <userContext.Provider value={{user, login, logout, loading}}>
        {children}
    </userContext.Provider>
  )
}

export const useAuth = () => useContext(userContext)
export default authContext