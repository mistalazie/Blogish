import { useState } from "react"
import { useNavigate} from 'react-router-dom'
import axios from "axios"

export function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const navigate = useNavigate()
    return (
        <div className="flex flex-col justify-center items-center">
            <input onChange={(e) => {
                setFirstName(e.target.value)
            }} type="text" placeholder="First Name">
            </input>
            <p>Last Name</p>
            <input onChange={(e) => {
                setLastName(e.target.value)
            }} type="text" placeholder="Last Name">
            </input>
            <p>Username</p>
            <input onChange={(e)=>{
                setUsername(e.target.value)
            }} type="text" placeholder="Type your username">
            </input>
            <p>Password</p>
            <input onChange={(e) => {
                setPassword(e.target.value)
            }} type="text" placeholder="Type your Password">
            </input>
            <p>First Name</p>
            <button onClick={ async ()=>{
                const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                    username,
                    password,
                    firstName,
                    lastName
                })
                localStorage.setItem("token", response.data.token)
                navigate('/dashboard')
            }}>Submit</button>
        </div>
    )
}