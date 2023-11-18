// import spicyIcon from "../../assets/images/svg/pepper-hot-solid.svg";
import editIcon from "../../../assets/images/svg/edit-item.svg";
import PropTypes from "prop-types";
import axios from "axios";

function FoodItems({ foodItems }) {
  function edit(id) {
    let editBtn = document.getElementById(`edit-btn-${id}`);
    let confirmBtn = document.getElementById(`confirm-btn-${id}`);

    // let foodPic = document.querySelector(`.foodItem-pic-${id} img`);
    let foodName = document.querySelector(`.foodItem-foodName-${id}`);
    let foodSpicy = document.querySelector(`.foodItem-spicy-${id}`);
    let foodIngr = document.querySelector(`.foodItem-ingr-${id}`);
    let foodPrice = document.querySelector(`.foodItem-price-${id}`);

    foodName.outerHTML = `<input type="text" class="w-72" value=${foodName.innerHTML} />`;
    foodSpicy.outerHTML = `<input type="text" class="w-10" value=${foodSpicy.innerHTML} />`;
    foodIngr.outerHTML = `<textarea style="width: 100%">${foodIngr.innerHTML}</textarea>`;
    foodPrice.outerHTML = `<input type="text" class="w-20" value=${foodPrice.innerHTML} />`;
    // foodPic.outerHTML =`<input type=file style="width:100%"></input>`

    if (editBtn.style.display === "none") {
      editBtn.style.display = "block";
    } else {
      editBtn.style.display = "none";
      confirmBtn.style.display = "block";
    }
  }

  function confirm(id) {
    let editBtn = document.getElementById(`edit-btn-${id}`);
    let confirmBtn = document.getElementById(`confirm-btn-${id}`);

    if (confirmBtn.style.display === "none") {
      confirmBtn.style.display = "block";
    } else {
      confirmBtn.style.display = "none";
      editBtn.style.display = "block";
    }
  }

  async function deleteItem(objectId) {
      try {
        await axios.delete(`http://localhost:3000/menu/deleteMenuItem/${objectId}`)
      } catch (error) {
        console.log(error);
      }
  }

  // function checkSpicyLevel(spicyNumber) {
  //   const spicyLvl = [];
  //   for (let i = 0; i < spicyNumber; i++) {
  //     spicyLvl.push(
  //       <img src={spicyIcon} alt="spicy!" key={i} className="spicyIcon" />
  //     );
  //   }
  //   return spicyLvl;
  // }
  return (
    <>
      {foodItems.map((foodItem) => (
        <div className="foodMenuItem md:flex p-10" key={foodItem.id}>
          <div>
            <div className={`foodItem-pic-${foodItem.id}`}></div>
          </div>
          <div className="name text-3xl m-1">
            <div>
              Name:
              <span className={`foodItem-foodName-${foodItem.id}`}>
                {foodItem.foodName}
              </span>
              <div>
                Spice:
                <span className={`foodItem-spicy-${foodItem.id}`}>
                  {foodItem.spicyLevel}
                </span>
              </div>
            </div>
            <div className="ingredients text-lg m-1 max-w-sm">
              <div>
                <i className={`foodItem-ingr-${foodItem.id}`}>
                  {foodItem.ingredients}
                </i>
              </div>
            </div>
          </div>
          <div className="foodPrice text-3xl items-center">
            <div>
              <b className={`foodItem-price-${foodItem.id}`}>
                {foodItem.price}
              </b>
              €
            </div>
          </div>
          {/* <button className="editFoodItemBtn" onClick={() => edit(foodItem.id)}>
            <img src={editIcon} alt="Edit Item" className="icon editItemIcon" />
          </button> */}
          <div className="button-container">
            <button
              className="opt-btn"
              id={`edit-btn-${foodItem.id}`}
              onClick={() => edit(foodItem.id)}
            >
              <img className="icon" src={editIcon} alt="edit" />
            </button>
            <button
              className="opt-btn"
              id={`confirm-btn-${foodItem.id}`}
              style={{ display: "none" }}
              onClick={() => confirm(foodItem.id)}
            >
              <img className="icon" src="" alt="confirm" />
            </button>
          </div>
          <div className="delete-btn-container">
            <button onClick={() => deleteItem(foodItem._id)}>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
}

FoodItems.propTypes = {
  foodItems: PropTypes.array.isRequired,
};

export default FoodItems;
