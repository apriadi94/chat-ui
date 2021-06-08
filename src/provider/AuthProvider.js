import {useEffect, createContext} from 'react'
import { useState } from 'react/cjs/react.development';
import socketIOClient from "socket.io-client";
const ENDPOINT = process.env.REACT_APP_BASE_URL
// const socket = socketIOClient(ENDPOINT);

export const AuthContext = createContext()

export const AuthProvider = ({Auth, children}) => {
    const [username, setusername] = useState(Auth.username)
    
    const [to, setTo] = useState({
        id: '',
        id_chat : null,
        name: '',
        profileImg: '',
    })

    
    const socket = socketIOClient(ENDPOINT, {
        query : {
            token : "ask_your_tech_lead",
            userId : Auth.userId,
            username : Auth.username,
            profileImage : `https://picsum.photos/id/${Auth.userId}/200/300`
        }
    });
    
    useEffect(() => {
        // socket.auth = {token, userId: Auth.userId, username: Auth.username, profileImage : `https://picsum.photos/id/${Auth.userId * 5}/200/300`};
        socket.connect();
          
    }, [])
    const AuthState = { socket, username, to, setTo }
    return(
        <AuthContext.Provider value={AuthState}>
            {children}
        </AuthContext.Provider>
    )
}