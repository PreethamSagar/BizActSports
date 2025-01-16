import React from 'react'

const res = await fetch("/api/activity", {
    method: "GET",
    header: {
        "Content-Type": "application/json"
    }
});
const data = await res.json();
console.log(data)
const Home = () => {
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home
