import { useState } from "react";
import { InputBox } from "../component/InputBox";
import { Button } from "../component/Button";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { Title } from "../component/Title";
import { Description } from "../component/Description";

export function Signin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    return <div className="flex justify-center h-screen bg-yellow-200">
        <div className="flex flex-col justify-center">
            <div className="bg-white w-96 text-center drop-shadow-md p-2 rounded-lg p-2 h-max">
                <div className="font-bold font-mono">
                <Title label={"Welcome back."} />
                </div>
                <Description label={"Fill in your details to Enter the World"} />
                <InputBox onChange={(e) => {
                    setUsername(e.target.value)
                }} label={"Username"} placeholder={"example@123.com"} />
                <InputBox onChange={(e) => {
                    setPassword(e.target.value)
                }} label={"Password"} placeholder={"123456"} />
                <div className="pt-4">
                <Button onClick={async () => {
                    const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                        username,
                        password
                    })
                    localStorage.setItem("token", response.data.token);
                    
                    navigate('/dashboard');
                }} label={"Sign In"} />
                </div>
            </div>
        </div>
    </div>
}