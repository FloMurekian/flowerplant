import FlowerItem from "./FlowerItem";

export default function FlowerList({ flowers, fullFlowers, setFlowers }) {

    // helper to get a stable id regardless of field name
    function getId(f) {
        return f?.id ?? f?._id ?? f?.uuid;
    }

    function deleteHandler(id) {
        const isConfirmed = window.confirm("Are you sure you want to delete this plant?");
        if (isConfirmed) {
            setFlowers(prev => prev.filter(flower => getId(flower) !== id));
        }
    }

return (

        <><h2 style={{ gridColumn: "span 3", textAlign: "center", fontFamily: "Epilogue, sans-serif", fontSize: "24px", borderBottom: "3px solid black", paddingBottom: "10px" }}>My Garden </h2>


        <div style={{ display: "inline-grid", gap: "20px", padding: "50px 80px",   gridTemplateColumns: "auto auto auto", paddingBottom: "100px", alignSelf: "center" }}>

        {flowers.map(flower => {
            const id = getId(flower);
            return (
                <FlowerItem key={id} flower={flower} deleteHandler={deleteHandler} />
            );
        })}

    </div></>
)
}
