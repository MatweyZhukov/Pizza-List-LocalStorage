//Global
import { v4 as uuid } from "uuid";

//Types
import { IPizzaOptions } from "../../interfaces/types";

//Components
import PizzaOptionSingle from "../PizzaOptionSingle/PizzaOptionSingle";

//Styles
import "./pizzaOptions.css";

function PizzaOptions({ pizzaImgOption, setPizzaImgOption }: IPizzaOptions) {
  const pizzaOptions = [
    "pizza-1.jpg",
    "pizza-2.jpg",
    "pizza-3.jpg",
    "pizza-4.jpg",
    "pizza-5.jpg",
  ];

  return (
    <select
      value={pizzaImgOption}
      onChange={(e) => setPizzaImgOption(e.target.value)}
    >
      <option value="Выберите картинку...">Выберите картинку...</option>
      {pizzaOptions.map((img) => {
        const id = uuid();

        return <PizzaOptionSingle id={id} img={img} />;
      })}
    </select>
  );
}

export default PizzaOptions;
