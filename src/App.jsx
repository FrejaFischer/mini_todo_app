import { useState, useEffect, useRef } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [items, setItems] = useState(localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []);

  // This effect runs whenever the 'items' state changes and saves it to local storage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    console.log("items is changed??");
  }, [items]);

  function addItem(newItem) {
    setItems((old) => old.concat(newItem));
  }
  function deleteItem(id) {
    setItems((old) => old.filter((item) => item.id !== id));
  }
  function toggleCompleted(id) {
    setItems((old) => {
      return old.map((item) => {
        if (item.id === id) {
          const copy = { ...item };
          copy.completed = !copy.completed;
          return copy;
        }
        return item;
      });
    });
  }
  return (
    <main>
      <h1>My To-Do List</h1>
      <Form addItem={addItem} />
      <List items={items} deleteItem={deleteItem} toggleCompleted={toggleCompleted} />
    </main>
  );
}

export default App;
