//Global
import { useState } from "react";

//Icons
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

//Components
import EditPizzaForm from "../EditPizzaForm/EditPizzaForm";

//Types
import { ISinglePizza } from "../../types/types";

//Styles
import "./singlePizza.css";

function SinglePizza({ pizza, updatePizza, deletePizza }: ISinglePizza) {
  const [edit, setEdit] = useState<boolean>(false);

  let formClassName = "edit-form";

  if (edit) {
    formClassName += " opened";
  } else {
    formClassName += " hidden";
  }

  const { title, price, img } = pizza;

  const changeFormStatus = () => {
    setEdit(!edit);
  };

  return (
    <div className="pizza">
      <img src={`/images/${img}`} alt={title} />
      <h2>{title}</h2>
      <span>{price} ₽</span>

      <div className="pizza-controls">
        <AiFillEdit onClick={changeFormStatus} />
        <AiFillDelete onClick={() => deletePizza(pizza.id)} />
      </div>

      <EditPizzaForm
        formClassName={formClassName}
        updatePizza={updatePizza}
        data={pizza}
        changeFormStatus={changeFormStatus}
      />
    </div>
  );
}

export default SinglePizza;
