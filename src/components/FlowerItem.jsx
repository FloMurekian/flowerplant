import { Link } from "react-router-dom";
import { useState } from "react";

export default function FlowerItem({ flower, deleteHandler }) {
    const imageSrc = flower?.image || null;

    const [isHovered, setIsHovered] = useState(false);
    const [imgHovered, setImgHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "8px",
                width: "400px",
                fontFamily: "Epilogue, sans-serif",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                paddingBottom: "16px",
                transition: "all 0.3s ease",
                transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                boxShadow: isHovered
                    ? "0 12px 24px rgba(0, 0, 0, 0.25)"
                    : "0 2px 8px rgba(0, 0, 0, 0.18)",
            }}
        >
            <h1 style={{
                fontSize: "30px",
                fontWeight: "bold",
                fontFamily: "Epilogue, sans-serif",
                marginBottom: "3px",
                textTransform: "uppercase",
               
            }}>
                {flower?.title}
            </h1>

            <h2 style={{
                fontSize: "16px",
                fontWeight: "normal",
                margin: "0",
                textTransform: "capitalize"
            }}>
                {flower?.sciName}
            </h2>

            {imageSrc && (
                <img
                    src={imageSrc}
                    alt={flower?.title || "flower"}
                    style={{
                        width: "300px",
                        height: "auto",
                        marginTop: "8px",
                        transition: "transform 0.3s ease",
                        transform: imgHovered ? "scale(1.05)" : "scale(1)",
                    }}
                />
            )}

            <div>
                <h3 style={{ fontSize: "20px", fontWeight: "bold", fontFamily: "Epilogue, sans-serif" }}>Description</h3>
                <p style={{ textAlign: "center", textTransform: "capitalize", borderBottom: "2px dotted #303030ff", paddingBottom: "8px"}}>{flower?.light}</p>
                <p style={{ textAlign: "center", textTransform: "capitalize", borderBottom: "2px dotted #303030ff", paddingBottom: "8px" }}>{flower?.water}</p>
                <p style={{ textAlign: "center", textTransform: "capitalize", borderBottom: "2px dotted #303030ff", paddingBottom: "8px"}}>{flower?.soil}</p>
                <p style={{ textAlign: "center", textTransform: "capitalize", borderBottom: "2px dotted #303030ff", paddingBottom: "8px" }}>{flower?.level}</p>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
                <Link to={`/update/${flower?.id}`}>
                    <button
                        style={{
                            backgroundColor: "#66aa68ff",
                            color: "white",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            transition: "0.3s ease",
                        }}
                    >
                        Update
                    </button>
                </Link>

                <button
                    onClick={() => deleteHandler(flower?.id)}
                    style={{
                        backgroundColor: "#c34840ff",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        transition: "0.3s ease",
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
