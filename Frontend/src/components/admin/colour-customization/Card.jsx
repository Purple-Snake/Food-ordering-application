import { useContext } from "react";
import { CustomizationContext } from "../../../context/CustomizationContext";

function Card() {
    const { colourValues } = useContext(CustomizationContext)

    return ( 
        <div>
            <div>
                <label htmlFor="Background-colour">Background colour:</label>
                <input type="text" />
                <label htmlFor="primary-colour">Primary colour:</label>
                <input type="text" />
                <label htmlFor="Secondary-colour">Secondary colour:</label>
                <input type="text" />
                <label htmlFor=""> colour:</label>
                <input type="text" />
            </div>
        </div>
     );
}

export default Card;