import { useState, useEffect } from "react";
import FlowerList from "../components/FlowerlList";
import SearchField from "../components/SearchField";
import Create from "./Create";

function MyPlants() {

  const [flowers, setFlowers] = useState(() => {
    const savedFlowers = localStorage.getItem("flowers");
    return savedFlowers ? JSON.parse(savedFlowers) : [];
  });

//looks for info in storage if there is some
  const [filterText, setFilterText] = useState(() => {
  const savedFilter = localStorage.getItem('filterText');
  return savedFilter ? savedFilter : "";
});

useEffect(() => {
  localStorage.setItem('filterText', filterText);
}, [filterText]);

useEffect(() => {
  localStorage.setItem('flowers', JSON.stringify(flowers));
}, [flowers]);

const sortedFlowers = [...flowers].sort((a, b) => {
  if (!a.date) return 1; // If a has no date, it should come after b
  if (!b.date) return -1; // If b has no date, it should come after a
  return a.date.localeCompare(b.date, "en", { sensitivity: "base" });
});


// filter flowers based on input across all fields of each flower object
const query = filterText ? filterText.trim().toLowerCase() : "";
const filteredFlowers = query === ""
  ? sortedFlowers
  : sortedFlowers.filter(flower =>
      Object.values(flower).some(value => {
        if (value == null) return false;
        if (typeof value === "object") {
          try {
            return JSON.stringify(value).toLowerCase().includes(query);
          } catch {
            return false;
          }
        }
        return String(value).toLowerCase().includes(query);
      })
    );


const handleInputChange = (e) => {
  setFilterText(e.target.value);
};

  return (
    <>

   <Create flowers={flowers} setFlowers={setFlowers} />

   <SearchField handleInput={handleInputChange} filter={filterText} />
      {filteredFlowers.length > 0 ? (
        <>

          <div>
            <FlowerList flowers={filteredFlowers} fullFlowers={flowers} setFlowers={setFlowers} />
          </div>
        </>
      ) : (
        <p>Grow your flower collection by adding new plants!</p>
      )}
    </>
  );
}

export default MyPlants;
