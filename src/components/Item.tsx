import { ItemsType } from "../App";

type ItemPropsType = {
  item: ItemsType;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
};
const Item = ({
  item: { id, description, quantity, packed },
  onDeleteItem,
  onToggleItem,
}: ItemPropsType) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={packed}
        onChange={() => {
          onToggleItem(id);
        }}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
        <button onClick={() => onDeleteItem(id)}>❌</button>
      </span>
    </li>
  );
};

export default Item;
