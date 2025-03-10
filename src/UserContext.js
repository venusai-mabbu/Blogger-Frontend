import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [userInfo, setUserInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Add loading state
    
    useEffect(() => {
<<<<<<< HEAD
        fetch('https://blogger-backend-iota.vercel.app/profile', {
=======
        fetch('https://blogger-backend-iota.vercel.app/', {
>>>>>>> ba97086b16febb4c17634fc63d7fb88dc97d8161
            credentials: 'include',
        })
        .then(res => {
            res.json().then(userInfo => {
                console.log("User info:", userInfo);
                setUserInfo(userInfo);
                setIsLoading(false); // Update loading state after fetch completes
            });
        })
        .catch(error => {
            console.error("Fetch error:", error);
            setIsLoading(false); // Update loading state in case of error
        });
    }, []);

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo, isLoading }}>
            {children}
        </UserContext.Provider>
    );
}
