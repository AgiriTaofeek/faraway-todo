import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import ParkingList from "./components/ParkingList";
import Stats from "./components/Stats";

export type ItemsType = {
  description: string;
  quantity: number;
  packed: boolean;
  id: number;
};
const App = () => {
  const [items, setItems] = useState<ItemsType[]>([]);

  function handleAddItems(newAddItem: ItemsType) {
    setItems((prevItems) => [...prevItems, newAddItem]);
  }

  function handleDeleteItem(id: number) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id: number) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              packed: !item.packed,
            }
          : item
      )
    );
  }
  function handleClearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <ParkingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
