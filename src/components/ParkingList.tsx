import Item from "./Item";
import { ItemsType } from "../App";
import { useState, ChangeEvent } from "react";

type ParkingListPropType = {
  items: ItemsType[];
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
  onClearItems: () => void;
};

const ParkingList = ({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}: ParkingListPropType) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems: ItemsType[] = [];

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setSortBy(e.target.value)
          }
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear list</button>
      </div>
    </div>
  );
};

export default ParkingList;
