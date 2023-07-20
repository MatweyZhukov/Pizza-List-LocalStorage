//Global
import { useState, useEffect } from "react";

//Components
import AddPizzaForm from "../AddPizzaForm/AddPizzaForm";
import DisplayPizzas from "../DisplayPizzas/DisplayPizzas";

//Types
import { IPizzaItem } from "../../types/types";

//Styles
import "./App.css";

function App() {
  const [pizzasList, setPizzasList] = useState<IPizzaItem[]>(
    JSON.parse(localStorage.getItem("pizzasList") || "") || []
  );

  useEffect(() => {
    localStorage.setItem("pizzasList", JSON.stringify(pizzasList));

    //eslint-disable-next-line
  }, [pizzasList]);

  function addPizza(newPizza: IPizzaItem) {
    setPizzasList([...pizzasList, newPizza]);
  }

  function updatePizza(newPizza: IPizzaItem) {
    setPizzasList(
      pizzasList.map((item: IPizzaItem) => {
        if (item.id === newPizza.id) {
          return newPizza;
        } else {
          return item;
        }
      })
    );
  }

  function deletePizza(id: IPizzaItem["id"]) {
    setPizzasList(pizzasList.filter((item: IPizzaItem) => item.id !== id));
  }

  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Наша пиццерия</span>
        <AddPizzaForm addPizza={addPizza} />
        {pizzasList.length !== 0 ? (
          <DisplayPizzas
            updatePizza={updatePizza}
            pizzasList={pizzasList}
            deletePizza={deletePizza}
          />
        ) : (
          <h1>Ваш список пуст</h1>
        )}
      </div>
    </div>
  );
}

export default App;
