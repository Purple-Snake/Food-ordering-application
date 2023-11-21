import { useContext } from "react";
import { CustomizationContext } from "../../../context/CustomizationContext";

function Card() {
  const { colourValues } = useContext(CustomizationContext);

  return (
    <div>
      {Object.entries(colourValues).map((entry) => {
        let key = entry[0];
        let value = entry[1];

                // Exclude ObjectID from rendering
                if (key === '_id') {
                  return null;
                }
                
        return (
          <div key={key}>
            <label htmlFor={`${key}-colour`}>{key} colour:</label>
            <input type="text" id={`${key}-colour`} defaultValue={value} />
          </div>
        );
      })}
    </div>
  );
}

export default Card;
