import { useState, useEffect } from 'react'
import axios from 'axios'
import './loginPage.css'

const LoginPage = ({ setAuth }) => {
    const [contact, setContact] = useState([])
    const [loading, setLoading] = useState(true)

    const GetContact = async () => {
        await axios({
            method : 'get',
            url : `${process.env.REACT_APP_BASE_URL}/contact`,
            headers : {
                Accept : 'aplication/json'
            }
        }).then(res => {
            setContact(res.data.data)
        }).catch(err => {
            console.log(err)
        })
        setLoading(false)
    }

    useEffect(() => {
        GetContact()
    }, [])

    return(
        <div className='container'>
            <div className='row'>
                <div className='center'>
                    <div>
                        <h1>Login Sebagai</h1>
                    </div>
                    <div>
                    {
                        loading ?
                        <p>Loading...</p> :
                        contact.map((list, index) => 
                            <div key={index} onClick={() => setAuth({userId : list.id, username : list.name})}>
                                <p>{list.name}</p>
                            </div>
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage