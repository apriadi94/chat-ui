import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import { FormGroup, Label, Input } from 'reactstrap';
import Highlighter from "react-highlight-words";



const ChatContentComponent = () => {
    const { socket, to, username } = useContext(AuthContext)
    const [Chat, setChat] = useState([])
    const [Search, setSearch] = useState('')
    const [Loading, setLoading] = useState(true)
    const [content, setcontent] = useState({
        type : 'TEXT', content : ''
    })
    const [Page, setPage] = useState(1)

    const [ListSearchChat, setListSearchCaht] = useState([])
    const [OnPageSearch, setOnPageSearch] = useState(null)
    const [OnIndexSerach, setOnIndexSearch] = useState(0)

    useEffect(() => {
       if(to.id !== ''){
        socket.emit('FETCH_MESSAGE', to, Page, Search);
        socket.on('MESSAGE_SENT', async (messageList, ArraySearch) => {
            setListSearchCaht(ArraySearch)
            setChat(messageList)
            socket.emit('READ_MESSAGE', to)
            setLoading(false)
        });
        socket.on('PRIVATE_MESSAGE_SENT', (message, to) => {
            setChat(Chat => [...Chat, message])
            if (to.id_chat !== null) {
                socket.emit('READ_MESSAGE', to)
            }   
        });
       }
    }, [to, Search])


    const SearchUpChat = (e) => {
        e.preventDefault();
        if(ListSearchChat[OnIndexSerach]){
            socket.emit('FETCH_PREV_SEARCH_MESSAGE', to, ListSearchChat[OnIndexSerach].page, Search);
            socket.on('PREV_SEARCH_MESSAGE_SENT', (messageList, LasPage) => {
                setOnPageSearch(ListSearchChat[OnIndexSerach].id)
                setPage(LasPage)
                setChat(messageList)
                setOnIndexSearch(OnIndexSerach + 1)
                location.href = `#${ListSearchChat[OnIndexSerach].id}`;
            });
        }else{
            alert('Tidak ada lagi')
        }
    }

    const SendChat = () => {
        socket.emit('SEND_PRIVATE_MESSAGE', content, [to])
        setcontent({type : 'TEXT', content : ''})
    }

    return(
        <div>
            <h1>Chat</h1>
            <p>------------------------------------------------------------------</p>
            <div>
            <FormGroup>
                <Label for="exampleEmail">Search</Label>
                <Input value={Search} onChange={(e) => {
                    setSearch(e.target.value)
                    setOnIndexSearch(0)
                    setOnPageSearch(null)
                }} type="text" placeholder="cari text" />
            </FormGroup>
            <button onClick={SearchUpChat}>Up</button>
            </div>
            <br/>
            <div className='chat-content'>
            {
                Chat.map((list, index) => 
                    <div id={list.id} key={index} style={{marginTop : 20, marginBottom : 30}}>
                        <p style={{marginRight : 20, textAlign : list.isFromSelf ? 'right' : 'left'}}>
                            {
                                list.search ?
                                <span style={{ backgroundColor : !list.isFromSelf ? '#ffcc66' : '#00ace6', borderRadius : 5, padding : 10}}>
                                    <Highlighter
                                    highlightStyle={{ color: 'yellow', backgroundColor : !list.isFromSelf ? '#ffcc66' : '#00ace6' }}
                                    searchWords={[Search]}
                                    autoEscape={true}
                                    textToHighlight={list.content}
                                />
                                </span>
                                 : 
                                <span style={{color: !list.isFromSelf ? 'black' : 'white',  backgroundColor : !list.isFromSelf ? '#ffcc66' : '#00ace6', borderRadius : 5, padding : 10}}>
                                    {list.content}
                                </span>
                            }
                            
                        </p>
                    </div>
                )
            }
            </div>
            <FormGroup>
                <Input value={content.content} onChange={(e) => {
                    setcontent({...content, content : e.target.value})
                }} type="text" placeholder="kirim pesan" />
            </FormGroup>
            <button onClick={SendChat}>kirim</button>
        </div>
    )
}

export default ChatContentComponent