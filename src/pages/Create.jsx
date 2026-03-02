import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Create({ flowers, setFlowers }) {
    const [title, setTitle] = useState("")
    const [sciName, setSciName] = useState("")
    const [light, setLight] = useState("")
    const [water, setWater] = useState("")
    const [soil, setSoil] = useState("")
    const [level, setLevel] = useState("")

    const navigate = useNavigate()

    function createHandler(e) {
        e.preventDefault()

        const newFlower = {
            id: Date.now(),
            title,
            sciName,
            light,
            water,
            soil,
            level,
        }

        setFlowers(prev => [...prev, newFlower])
        // clear inputs optionally
        setTitle("")
        setSciName("")
        setLight("")
        setWater("")
        setSoil("")
        setLevel("")

        navigate("/my-plants")
    }

    return (
        <form onSubmit={createHandler}>
            <label htmlFor="title">Name</label>
            <input type="text" id="title" name="title" value={title} required onChange={(e) => setTitle(e.target.value)} />
            <label htmlFor="sciName">Scientific Name</label>
            <input type="text" id="sciName" name="sciName" value={sciName} required onChange={(e) => setSciName(e.target.value)} />
            <label htmlFor="light">Light</label>
            <input type="text" id="light" name="light" value={light} required onChange={(e) => setLight(e.target.value)} />
            <label htmlFor="water">Water</label>
            <input type="text" id="water" name="water" value={water} required onChange={(e) => setWater(e.target.value)} />
            <label htmlFor="soil">Soil</label>
            <input type="text" id="soil" name="soil" value={soil} required onChange={(e) => setSoil(e.target.value)} />
            <label htmlFor="level">Level</label>
            <input type="text" id="level" name="level" value={level} required onChange={(e) => setLevel(e.target.value)} />
            <button type="submit">Plant</button>
        </form>
    )
}