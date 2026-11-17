import React from 'react'
import { useState, useEffect } from 'react'
import "../index.css"

const First = () => {
    let [count, setCount] = useState(0)
    let [name, setName] = useState("Tayyaba")
    const handleClick = () => {
        setCount(count + 1)
    }
    const handleName = () => {
        setName("Adeen")
    }

    useEffect(() => {
        console.log("component rendering")
    }, []) //dependency array

    return (
        <div>
            <h1 className="text-3xl bg-red-600 text-white">
                Hello world!
            </h1>
            {/* <h1>Use effect</h1> */}
            <h1>Count {count}</h1>
            <h1>{name}</h1>
            <button onClick={handleClick} className='border rounded-2xl px-4 py-3 bg-green-50 hover:bg-amber-300'>Increment</button>
            <button onClick={handleName}>Change name</button>
        </div>
    )
}

export default First
