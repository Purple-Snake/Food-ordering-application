import { useContext, useState, useEffect } from "react";
import { CustomizationContext } from "../../../context/CustomizationContext";
import axios from "axios";
import "./card.css";

function Card() {
  const { colourValues, getColours } = useContext(CustomizationContext);
  const _id = colourValues._id;
  const [hexValue, setHexValue] = useState({});

  useEffect(() => {
    // Set initial hex values when component mounts
    const initialHexValues = {};
    Object.keys(colourValues).forEach((key) => {
      if (key !== "_id") {
        initialHexValues[key] = colourValues[key];
      }
    });
    setHexValue(initialHexValues);
  }, [colourValues]);

  function handleSumbitPatch(e) {
    e.preventDefault();

    const updatedColours = { _id };

    e.target.querySelectorAll(".colour-input").forEach((input) => {
      const key = input.id;
      updatedColours[key] = input.value;
    });

    try {
      axios.patch("http://localhost:3000/custom/updateColours", updatedColours);
      getColours();
    } catch (error) {
      console.log(error);
    }
  }

  function handleHexChange(key, hex) {
    setHexValue((prevHexValue) => ({
      ...prevHexValue,
      [key]: hex,
    }));
  }

  return (
    <div className="custom-colour-panel flex-col m-auto mt-[10%] p-5 w-[25rem]">
      <form onSubmit={handleSumbitPatch}>
        {Object.keys(colourValues).map((key) => {
          if (key === "_id") {
            return null;
          }

          const value = colourValues[key];

          return (
            <div key={key}>
              <label htmlFor={key}>{key}:</label>
              <input
                className="colour-input"
                type="text"
                id={key}
                defaultValue={value}
                onChange={(e) => handleHexChange(key, e.target.value)}
              />
              <span className="color-preview" style={{width: '20px', height: '20px', padding: '0.3rem', backgroundColor: hexValue[key], border: '1px solid #000', borderRadius: '5px' }}>
                AaBb
              </span>
            </div>
          );
        })}
        <input 
        type="submit" 
        value="Update colours" 
        style={{
          border: '1px solid #000',
          cursor: 'pointer',
          padding: '0.3rem 0.5rem',
          borderRadius: '5px',
        }}
      />
      </form>
    </div>
  );
}

export default Card;