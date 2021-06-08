import ContactComponent from '../../komponent/chat/ContactComponent'
import ChatContentComponent from '../../komponent/chat/ChatContentComponent'

const ChatPage = () => {
    return(
       <div className='container'>
           <div className='row'>
               <div className='col-md-6'>
                    <ContactComponent/>
               </div>
               <div className='col-md-6'>
                    <ChatContentComponent/>
                </div>
           </div>
       </div>
    )
}

export default ChatPage