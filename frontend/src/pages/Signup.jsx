import { useState } from "react"
import { InputBox } from "../component/InputBox"
import { Button } from "../component/Button"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Title } from "../component/Title"
import { Description } from "../component/Description"

export function Signup() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    return <div className="bg-sky-400 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 drop-shadow-lg">
                <div className="font-bold">
                    <Title label={"Join Blogish."} />
                </div>
                <Description label={"Fill in your details to Enter the World"} />
                <InputBox onChange={(e) => {
                    setUsername(e.target.value)
                }} label={"Username"} placeholder={"mimi@123.com"} />
                <InputBox onChange={(e) => {
                    setFirstName(e.target.value)
                }} label={"First Name"} placeholder={"Mimi"} />
                <InputBox onChange={(e) => {
                    setLastName(e.target.value)
                }} label={"Last Name"} placeholder={"Chan"} />
                <InputBox onChange={(e) => {
                    setPassword(e.target.value)
                }} label={"Password"} placeholder={"123456"} />
                <div className="pt-4">
                    <Button onClick={async () => {
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                            username,
                            password,
                            firstName,
                            lastName
                        })
                        localStorage.setItem("token", response.data.token)
                        navigate('/dashboard')
                    }} label={"Sign Up"} />
                </div>
            </div>
        </div>
    </div>
}