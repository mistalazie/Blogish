import { useState } from "react"
import { useNavigate} from 'react-router-dom'
import axios from "axios"

export function Signin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    return (
        <div className="flex flex-col justify-center items-center">
            <p>Username</p>
            <input onChange={(e)=>{
                setUsername(e.target.value)
            }} type="text" placeholder="Type your username">
            </input>
            <p>Password</p>
            <input onChange={(e) => {
                setPassword(e.target.value)
            }} type="text" placeholder="Type your username">
            </input>
            <button onClick={ async ()=>{
                const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                    username,
                    password
                })
                localStorage.setItem("token", response.data.token)
                navigate('/dashboard')
            }}>Log in</button>
        </div>
    )
}