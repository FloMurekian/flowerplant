export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#fffcfcff", padding: "30px", fontFamily: "Epilogue, sans-serif", borderRadius: "4px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))"}}>
            <div
                style={{
                    width: "100%",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "20px",
                    flexWrap: "wrap"
                }}
            >

                <div style={{ gap: "20px", display: "flex", flexDirection: "column", alignItems: "center", margin: "30px", textAlign: "left" }}>
                <h2 style={{ fontFamily: "DM Sans, sans-serif", fontSize: "40px",  color: "black", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}>
                     * F L O W E R  P L A N T *
                </h2>
                <p style={{ fontSize: "18px", color: "black", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)", fontFamily: "Epilogue, sans-serif", fontWeight: "300", textAlign: "center", margin: "-30px 0 0 0" }}> Welcome to your garden!</p>
</div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", fontFamily: "Epilogue, sans-serif", fontWeight: "400", margin: "30px", fontSize: "12px", color: "#555", display: "flex", flexDirection: "column", marginTop: "20px" }}>

                    <p style={{ fontSize: "20px", margin: "10px"}}>Contact information:</p>

                    <div style={{ fontSize: "12px", color: "#555", display: "flex", flexDirection: "column", marginTop: "5px" }}>

                        <div style={{ marginBottom: "5px" }}>
                            <span style={{ fontWeight: "bold" }}>Address:</span>
                            <span style={{ marginLeft: "5px" }}>123 Botanical Lane, Green City, 2345</span>
                        </div>

                        <div style={{ marginBottom: "5px" }}>
                            <span style={{ fontWeight: "bold" }}>Copenhagen, Denmark</span>
                        </div>

                        <div style={{ marginBottom: "5px" }}>
                            <span style={{ fontWeight: "bold" }}>Email:</span>
                            <span style={{ marginLeft: "5px" }}>flowplant123@flowerplant2026.dk</span>
                        </div>

                        <div style={{ marginBottom: "5px" }}>
                            <span style={{ fontWeight: "bold" }}>Mobile:</span>
                            <span style={{ marginLeft: "5px" }}>+452076765</span>
                        </div>

                        <div style={{ marginTop: "6px", color: "#555", fontSize: "12px" }}>© 2026 FlowerPlant</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
