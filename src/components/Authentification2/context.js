import React, {useState, useEffect, useContext} from "react";

export const AuthContext = React.createContext({
    token: null,
    userName: null,
    profilePicture: null,
    setData: function (token) {
        this.token = token;
    }
});

export const useAuthContext = () => {
    return useContext(AuthContext);
}