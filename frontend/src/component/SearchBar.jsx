import { useState, useEffect } from "react";

export function SearchBar() {
    const [query, setQuery] = useState('');

    // useEffect(() => {
    //     axios.get('http://localhost:3000/api/v1/bulk?=' + filter)
    // }, [filter])
    return <div>
        <input onChange={(e) =>{
            setQuery(e.target.value)
        }} type="text" placeholder="Search"></input>
    </div>
}