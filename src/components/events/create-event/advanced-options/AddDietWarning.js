import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";

import DietaryWarning from "./DietaryWarning.js";

const AddDietRestriction = ({ dietWarnings, setDietWarnings }) => {
  const [formInput, setFormInput] = useState({ title: "" });

  const handleChange = (e) => {
    e.preventDefault();
    setFormInput({ title: e.target.value });
  };

  const addDietWarning = (e) => {
    e.preventDefault();
    const newDietWarning = {
      id: dietWarnings.length + 1,
      title: formInput.title,
    };
    setDietWarnings([...dietWarnings, newDietWarning]);
    setFormInput({ title: "" });
  };

  const removeDietWarning = (id) => {
    setDietWarnings(
      dietWarnings.filter((diet) => {
        return diet.id !== id;
      })
    );
  };

  return (
    <>
      <div style={{ marginTop: "55px" }}>
        <Typography>Add dietary warnings</Typography>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={formInput.title}
          style={{
            fontSize: "1.6rem",
            border: "none",
            borderBottom: "2px solid #f0f0f0",
            width: "40%",
            outline: "none",
            borderRadius: "10px",
            padding: "15px 15px",
          }}
        />
        <button
          onClick={addDietWarning}
          disabled={!formInput.title}
          className={!formInput.title ? "inactive" : ""}
          style={{
            color: "white",
            fontSize: "1.6rem",
            background: "#82df96",
            borderRadius: "10px",
            border: "none",
            fontWeight: "bold",
            wordSpacing: "15px",
            cursor: "pointer",
            padding: "15px 20px",
            marginLeft: "2%",
          }}
        >
          Add +
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", width: "60%" }}>
        {dietWarnings.map((diet) => {
          return (
            <DietaryWarning
              diet={diet}
              removeDietWarning={removeDietWarning}
              key={diet.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default AddDietRestriction;