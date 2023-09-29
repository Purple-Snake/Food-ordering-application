import FoodGroupButtons from "./FoodGroupButtons";
import Menu from "./Menu";

function Home() {
  return (
    <>
      <div className="max-md:hidden">
        <FoodGroupButtons />
      </div>
      <Menu />
    </>
  );
}

export default Home;
