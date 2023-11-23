import { useContext, useEffect, useState } from "react";
import { CustomizationContext } from "../../../context/CustomizationContext";
import axios from "axios";

function Card() {
  const { colourValues, getColours } = useContext(CustomizationContext);
  const [hexValue, setHexValue] = useState("");
  const _id = colourValues._id;

  // Tried the preview square but doesn't work
  function handleHexChange(key, hex) {
    setHexValue((prevHexValue) => ({
      ...prevHexValue,
      [key]: hex,
    }));
  }

  useEffect(() => {
    console.log(hexValue);
  }, [hexValue]);

  async function handleSumbitPatch(e) {
    e.preventDefault();

    const updatedColours = { _id };

    e.target.querySelectorAll(".colour-input").forEach((input) => {
      updatedColours[input.id] = input.value;
    });

    try {
      await axios.patch(
        "http://localhost:3000/custom/updateColours",
        updatedColours
      );
      getColours();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="custom-colour-panel flex-col m-auto mt-[10%] p-5 w-[25rem]">
      <form onSubmit={handleSumbitPatch}>
        {Object.entries(colourValues).map((entry) => {
          let key = entry[0];
          let value = entry[1];

          // Exclude ObjectID from rendering
          if (key === "_id") {
            return null;
          }

          return (
            <div key={key}>
              <label htmlFor={`${key}`}>{key}:</label>
              <input
                className="colour-input"
                type="text"
                id={`${key}`}
                defaultValue={value}
                maxLength={7}
                onChange={(e) => handleHexChange(key, e.target.value)}
              />
              <span className={`w-[20px] h-[20px] bg-[${hexValue[key]}]`}>
                AAA
              </span>
            </div>
          );
        })}
        <input type="submit" value="Update colours" />
      </form>
    </div>
  );
}

export default Card;
