import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider'

const ContactComponent = () => {
    const { socket } = useContext(AuthContext)

    const [User, setUser] = useState([]);
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        socket.emit('FETCH_USER_CONVERSATION', '')
        socket.on('USER_CONVERSATION_SENT', data => {
          console.log(data)
    
            const newData = [...data].map(item => ({
                id_chat : item.id,
                id : item.userId,
                name : item.userName,
                message : item.lastMessage.content,
                unread : item.unRead,
                profileImg: item.userPicture,
            }));
            setUser(newData);
            setLoading(false)
        })
    }, [])
    return (
        <div>
            <p>List Contact</p>
            <p>----------------------------------------------------------</p>
            {
                User.map((list, index) => 
                    <div key={index} style={{display : 'flex', marginTop : '30px'}}>
                        <img src={list.profileImg} alt="Girl in a jacket" width="50" height="50" rai/>
                        <p style={{marginTop : '10px', marginLeft : 20}}>{list.name}</p>
                    </div>
                )
            }
        </div>
    )
}

export default ContactComponent