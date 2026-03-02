import { Link } from "react-router-dom";

export default function Header() {

  return (
    <header style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "30px", textAlign: "center", backgroundColor: "#fffcfcff", fontFamily: "Epilogue, sans-serif", fontSize: "18px", marginBottom: "20px", borderRadius: "4px", position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))" }}>

        <nav style={{ display: "flex", gap: "100px"}}>
            <Link style={{ textDecoration: "none", color: "black", fontFamily: "Epilogue, sans-serif", fontWeight: "normal" }} to="/">Home</Link>
            <Link style={{ textDecoration: "none", color: "black", fontFamily: "Epilogue, sans-serif", fontWeight: "normal" }} to="/my-plants">My Plants</Link>
            <Link style={{ textDecoration: "none", color: "black", fontFamily: "Epilogue, sans-serif", fontWeight: "normal" }} to="/about">About Us</Link>
      </nav>
    </header>
  )
}