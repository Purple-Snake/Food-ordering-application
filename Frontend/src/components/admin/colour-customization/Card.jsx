import { useContext } from "react";
import { CustomizationContext } from "../../../context/CustomizationContext";
import axios from "axios";

function Card() {
  const { colourValues, getColours } = useContext(CustomizationContext);
  const _id = colourValues._id

  async function handleSumbitPatch(e) {
    e.preventDefault();

    const updatedColours = {_id};

    e.target.querySelectorAll(".colour-input").forEach((input) => {
      updatedColours[input.id] = input.value;
    });


    try {
      await axios.patch("http://localhost:3000/custom/updateColours", updatedColours)
      getColours()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="custom-colour-panel flex-col m-auto w-[25rem]">
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
              />
            </div>
          );
        })}
        <input type="submit" value="Update colours" />
      </form>
    </div>
  );
}

export default Card;
