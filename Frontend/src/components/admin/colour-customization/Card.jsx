import { useContext } from "react";
import { CustomizationContext } from "../../../context/CustomizationContext";

function Card() {
  const { colourValues } = useContext(CustomizationContext);

  return (
    <div className="custom-colour-panel flex-col m-auto w-[25rem]">
      <form action="">
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
