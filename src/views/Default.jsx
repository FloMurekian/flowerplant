import { Link } from "react-router-dom"
import back from "../assets/back4.mp4"


export default function Default() {

  return (

    <div>
      
      <div style={{ position: "relative", overflow: "hidden" }}>
      <video autoPlay playsInline loop muted style={{ width: "100%", height: "100%", objectFit: "cover", position: "fixed", top: 0, left: 0, zIndex: -1 }} aria-hidden="true">
        <source src={back} type="video/mp4" />
      </video>
    </div>

    <div style={{ position: "relative",top: 0, left: 0, width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{ fontSize: "100px", fontWeight: "bold", textAlign: "center", color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", fontFamily: "DM Sans, sans-serif", marginTop: "160px" }}>* F L O W E R  P L A N T *</h1>
        <p style={{ fontSize: "24px", textAlign: "center", color: "white", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)", fontFamily: "Epilogue, sans-serif", marginTop: "20px", fontWeight: "500"}}>Welcome to your garden!</p>
        <p style={{ fontSize: "18px", textAlign: "center", color: "white", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)", fontFamily: "Epilogue, sans-serif", marginTop: "10px", fontWeight: "300"}}>
          Explore the beauty of nature and nurture your plants with love.
        </p>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
        <Link to="/my-plants">
          <button style={{ padding: "12px 24px", fontSize: "18px", fontWeight: "bold", color: "black", backgroundColor: "white", border: "none", borderRadius: "4px", cursor: "pointer", marginRight: "20px" }}>My Plants</button>
        </Link>
        <Link to="/about">
          <button style={{ padding: "12px 24px", fontSize: "18px", fontWeight: "bold", color: "white", backgroundColor: "transparent", border: "1.5px solid white", borderRadius: "4px", cursor: "pointer" }}>About Us</button>
        </Link>
      </div>
        </div>

    <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(255, 254, 254, 0.88)", padding: "40px", marginTop: "100px", marginBottom: "100px", borderRadius: "4px" }}>

      <h2 style={{ fontSize: "32px", fontWeight: "bold", textAlign: "center", color: "black", fontFamily: "DM Sans, sans-serif", marginBottom: "20px" }}>"What's good to plant right now?"</h2>
      <p style={{ fontSize: "18px", textAlign: "center", color: "black", fontFamily: "Epilogue, sans-serif", marginTop: "10px", fontWeight: "200"}}>Grow your garden with the perfect plants for this month</p>

<table style={{ width: "80%", borderCollapse: "separate", borderSpacing: "0 40px", fontFamily: "Epilogue, sans-serif", marginTop: "30px", marginBottom: "30px" }}>

  <thead style={{ color: "black", fontSize: "22px", fontFamily: "Epilogue, sans-serif", fontWeight: "bold", textAlign: "left" }}>

    <tr>
      <th style={{ borderBottom: "3px solid black", paddingBottom: "8px" }}>Plant</th>
      <th style={{ borderBottom: "3px solid black", paddingBottom: "8px" }}>Scientific Name</th>
      <th style={{ borderBottom: "3px solid black", paddingBottom: "8px" }}>Light</th>
      <th style={{ borderBottom: "3px solid black", paddingBottom: "8px" }}>Watering</th>
      <th style={{ borderBottom: "3px solid black", paddingBottom: "8px" }}>Soil</th>
      <th style={{ borderBottom: "3px solid black", paddingBottom: "8px" }}>Level</th>
    </tr>
  </thead>

  <tbody style={{ color: "black", fontSize: "18px", fontFamily: "Epilogue, sans-serif", fontWeight: "normal", textAlign: "left" }}>

    <tr>
      <td style={{ fontWeight: "bold" }}>Rose</td>
      <td style={{ fontStyle: "italic" }}>Rosa rubiginosa</td>
      <td>Medium</td>
      <td>Weekly</td>
      <td>Loamy</td>
      <td style={{ color: "green" }}>Beginner</td>
    </tr>
    <tr>
      <td style={{ fontWeight: "bold" }}>Succulent</td>
      <td style={{ fontStyle: "italic" }}>Various</td>
      <td>Low</td>
      <td>Bi-weekly</td>
      <td>Well-draining</td>
      <td style={{ color: "orange" }}>Intermediate</td>
    </tr>
    <tr>
      <td style={{ fontWeight: "bold" }}>Fern</td>
      <td style={{ fontStyle: "italic" }}>Polystichum munitum</td>
      <td>High</td>
      <td>Every 3 days</td>
      <td>Peaty</td>
      <td style={{ color: "red" }}>Advanced</td>
    </tr>
  </tbody>
</table>

<div style={{ border: "2px solid black", borderRadius: "4px", padding: "20px", marginTop: "40px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.28)" }}>

<h3 style={{ fontSize: "36px", fontWeight: "bold", color: "black", fontFamily: "Epilogue, sans-serif"}}>Beginner Tips for Planting</h3>

  <ul style={{ listStyleType: "disc", paddingLeft: "20px", color: "black", fontFamily: "Epilogue, sans-serif", fontSize: "18px", textAlign: "center"}}>
    <li style={{ paddingBottom: "25px", listStyle: "none" }}>Choose the right time to plant based on your local climate.</li>
    <li style={{ paddingBottom: "25px", listStyle: "none" }}>Prepare your soil by adding organic matter and ensuring proper drainage.</li>
    <li style={{ paddingBottom: "25px", listStyle: "none" }}>Water your plants thoroughly after planting to help them establish.</li>
    <li style={{ paddingBottom: "25px", listStyle: "none" }}>Consider companion planting to enhance growth and deter pests.</li>
  </ul>
</div>
      </div>
      


</div>


  )
}