import { ChangeEvent, FormEvent, useState } from "react";
import { ItemsType } from "../App";

type FormPropType = {
  onAddItems: (newAddItem: ItemsType) => void;
};

const Form = ({ onAddItems }: FormPropType) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //NOTE - Guard clause to quickly return function if description remains as an empty string
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setQuantity(Number(e.target.value))
        }
      >
        //NOTE - Array.from() in the example below returns a new array, the
        first parameter object specifies the length of an empty array and the
        second parameter is basically a map method where we used the index (i.e
        2nd parameter of the map method) to return a new array filled with
        elements from 1 to 20 and used the finally returned array to render the
        20 option elements
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setDescription(e.target.value)
        }
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
