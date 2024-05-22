import { CreateTopBar } from "../components/CreateTopBar";
import { useState } from "react";
import axios from "axios";

export function Create() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    return (
        <div>
            <CreateTopBar onClick={async () => {
                await axios.post('http://localhost:3000/api/v1/post/create', {
                    title,
                    description
                })
            }} />
            <div className="flex flex-col justify-center items-center">
                <p>Title</p>
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} type="text" placeholder="Title">
                </input>
                <p>Description</p>
                <input onChange={(e) => {
                    setDescription(e.target.value)
                }} type="text" placeholder="Description">
                </input>
            </div>
        </div>
    )
}