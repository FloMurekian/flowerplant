import React from 'react';

export default function SearchField({ handleInput, filter, value, onChange }) {
  const inputValue = value ?? filter ?? "";
  const handleChange = onChange ?? handleInput ?? (() => {});

  return (
    <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
      <input style={{
        margin: "15px 0",
        width: "50%",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        outline: "none",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
      }}
        type="text"
        placeholder="Search plants..."
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}