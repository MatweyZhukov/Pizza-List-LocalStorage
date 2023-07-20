//Components
import SinglePizza from "../SinglePizza/SinglePizza";

//Types
import { IDisplayPizzas } from "../../types/types";

//Styles
import "./displayPizzas.css";

function DisplayPizzas({
  pizzasList,
  updatePizza,
  deletePizza,
}: IDisplayPizzas) {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return (
          <SinglePizza
            key={pizza.id}
            pizza={pizza}
            updatePizza={updatePizza}
            deletePizza={deletePizza}
          />
        );
      })}
    </div>
  );
}

export default DisplayPizzas;
