import React, {useState, useEffect} from "react";

export const AuthContext = React.createContext();

export const AuthProvider = () => {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider value={user} />
    )
}