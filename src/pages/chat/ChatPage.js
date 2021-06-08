import ContactComponent from '../../komponent/chat/ContactComponent'

const ChatPage = () => {
    return(
       <div className='container'>
           <div className='row'>
               <div className='col-md-6'>
                    <ContactComponent/>
               </div>
               <div className='col-md-6'>
                    <h1>chat component</h1>   
                </div>
           </div>
       </div>
    )
}

export default ChatPage