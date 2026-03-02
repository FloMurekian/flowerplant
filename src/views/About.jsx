import pic from "../assets/pic.jpg";

export default function About() {
  return (
    <div
      style={{
        backgroundImage: `url(${pic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
       
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px",
        marginTop: "50px"
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.88)",
          padding: "10px",
          borderRadius: 8,
          maxWidth: 800,
        }}
      >
        <div style={{ margin: "30px", fontFamily: "Epilogue, sans-serif", alignContent: "center", textAlign: "center" }}>
          <h2 style={{ fontStyle: "bold", fontWeight: "bold", textTransform: "uppercase", fontFamily: "DM Sans, sans-serif", paddingBottom: "10px" }}>*Flower Plant*</h2>

        <p style={{ fontSize: "16px", lineHeight: "1.5", marginBottom: "10px", fontFamily: "Epilogue, sans-serif" }}>
          We are welcoming community. Perfect for plant enthusiasts, passionate
          gardeners, and curious beginners who want to learn more about plant
          care. We believe that growing plants should be enjoyable, rewarding,
          and accessible to everyone—no matter your experience level.
        </p>

  <p style={{ fontSize: "32px", textAlign: "center", margin: "15px 0" }} aria-label="flower-emoji" role="img">
    🌸
  </p>

        <p style={{ fontSize: "16px", lineHeight: "1.5", marginBottom: "10px", marginTop: "25px" }}>
          Our goal is to provide helpful tips, practical guides, and inspiration
          to support you on your gardening journey. Whether you're nurturing
          your first houseplant or cultivating a thriving outdoor garden.
        </p>
      </div>
    </div>
    </div>
  );
}
