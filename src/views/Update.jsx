import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function Update() {
    const { id } = useParams();

    const [flowers, setFlowers] = useState(() => {
        const savedFlowers = localStorage.getItem("flowers");
        return savedFlowers ? JSON.parse(savedFlowers) : [];
    });

    const flower = flowers.find((f) => f.id === Number(id));
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [sciName, setSciName] = useState("");
    const [light, setLight] = useState("");
    const [water, setWater] = useState("");
    const [soil, setSoil] = useState("");
    const [level, setLevel] = useState("");

    let navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("flowers", JSON.stringify(flowers));
    }, [flowers]);

    useEffect (() =>{
        if (flower) {
            setTitle(flower.title);
            setSciName(flower.sciName);
            setLight(flower.light);
            setWater(flower.water);
            setSoil(flower.soil);
            setLevel(flower.level);
            setImage(flower.image);
        }
    }, [flower]);


    function updateHandler(e) {
        e.preventDefault();
        const updatedFlower = {
            id: Number(id),
            title: title,
            sciName: sciName,
            light: light,
            water: water,
            soil: soil,
            level: level,
            image: image
        };
        setFlowers(flowers.map((f) => (f.id === Number(id) ? updatedFlower : f)));
        navigate("/my-plants");
    }

    return (
        <>
       <h1 style={{ textAlign: "center", paddingTop: "120px", marginBottom: "50px", fontFamily: "DM Sans, sans-serif", fontWeight: "bold", fontSize: "42px" }}>
        //&nbsp;&nbsp;Update&nbsp;&nbsp;//
        </h1>
        
    <form style={{ maxWidth: "600px", margin: "0 auto", fontFamily: "Epilogue, sans-serif" }} onSubmit={updateHandler}>

                <label style={{ fontSize: "18px", fontWeight: "250"}} htmlFor="id">ID: </label>

                <input style={{
                margin: "15px 0",
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                outline: "none",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
            }} type="text" name="id" id="id" value={id} readOnly />


                <label style={{ fontSize: "18px", fontWeight: "250"}} htmlFor="title">Name</label>

                <input style={{
                    margin: "15px 0",
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    outline: "none",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }} type="text" id="title" name="title" value={title} required onChange={(e) => setTitle(e.target.value)} />


                <label style={{ fontSize: "18px", fontWeight: "250"}} htmlFor="sciName">Scientific Name</label>

                <input style={{
                    margin: "15px 0",
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    outline: "none",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }} type="text" id="sciName" name="sciName" value={sciName} required onChange={(e) => setSciName(e.target.value)} />


                <label style={{ fontSize: "18px", fontWeight: "250"}} htmlFor="light">Light</label>

                <input style={{
                    margin: "15px 0",
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    outline: "none",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }} type="text" id="light" name="light" value={light} required onChange={(e) => setLight(e.target.value)} />


                <label style={{ fontSize: "18px", fontWeight: "250"}} htmlFor="water">Water</label>

                <input style={{
                margin: "15px 0",
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                outline: "none",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
            }} type="text" id="water" name="water" value={water} required onChange={(e) => setWater(e.target.value)} />


                <label style={{ fontSize: "18px", fontWeight: "250"}} htmlFor="soil">Soil</label>

                <input style={{
                margin: "15px 0",
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                outline: "none",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
            }} type="text" id="soil" name="soil" value={soil} required onChange={(e) => setSoil(e.target.value)} />

  <label style={{ fontSize: "18px", fontWeight: "250"}} htmlFor="level">Level</label>

            <select style={{ margin: "15px 0",
                width: "104%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                outline: "none",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
            }} id="level" name="level" value={level} required onChange={(e) => setLevel(e.target.value)}>

                <option>Select..</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>

            </select>

            <label style={{ fontSize: "18px", fontWeight: "250"}} htmlFor="image">Image</label>

            <input style={{
                margin: "15px 0",
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                outline: "none",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
            }} type="file" id="image" name="image" accept="image/*"  onChange={(e) => {
                const file = e.target.files && e.target.files[0];
                if (file) {
                    const url = URL.createObjectURL(file);
                    setImage(url);
                } else {
                    setImage("");
                }

            }} />
                <button style={{ backgroundColor: "green", color: "white", padding: "12px 20px", border: "none", borderRadius: "4px", cursor: "pointer", fontFamily: "Epilogue, sans-serif",fontSize: "16px", display: "block", margin: "20px auto" }} type="submit">Update</button>
            </form>
            </>


    );

};