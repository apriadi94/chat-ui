import { useState } from "react";
import { AuthProvider } from './provider/AuthProvider'
import LoginPage from './pages/login/LoginPage'
import ChatPage from './pages/chat/ChatPage'

export default function App() {
  const [Auth, setAuth] = useState({userId : null, username : ''})
  return (
    Auth.userId === null ?
    <LoginPage setAuth={setAuth}/>
    :
    <AuthProvider Auth={Auth}>
       <ChatPage/>
    </AuthProvider>
  );
}