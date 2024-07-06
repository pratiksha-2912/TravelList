import { useState } from "react";
import {Logo} from "./logo";
import { Form } from "./form";
import { PackingList } from "./packingList";
import { Stats } from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeletedItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleClearList() {
    const confirmationsMessage = window.confirm(
      "Are you sure you want to clear the list"
    );
    if (confirmationsMessage) setItems([]);
  }
  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeletedItem}
        onToggleItem={handleToggleItems}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
