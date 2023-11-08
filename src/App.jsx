import { useState, useEffect, useRef } from "react";
import Form from "./components/Form";
import List from "./components/List";

// function setLocalStorage() {
//   const tasks = [];
//   // const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//   if (localStorage.getItem("tasks")) {
//     //tasks = JSON.parse(localStorage.getItem("tasks"));
//     console.log(JSON.parse(localStorage.getItem("tasks")));
//   }
//   // tasks.push(...items);
//   // localStorage.setItem("tasks", JSON.stringify(tasks));
// }

function App() {
  const [items, setItems] = useState([]);
  const hasRunFirstTime = useRef(null);

  // This effect runs when the component mounts and retrieves data from local storage
  useEffect(() => {
    const savedItems = localStorage.getItem("items");
    //console.log(savedItems);
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    } else {
      localStorage.setItem("items", JSON.stringify([]));
    }
  }, []); // The empty array [] makes this effect run only once after mounting

  // This effect runs whenever the 'items' state changes and saves it to local storage
  useEffect(() => {
    console.log(hasRunFirstTime.current, items);
    if (hasRunFirstTime.current) {
      localStorage.setItem("items", JSON.stringify(items));
      console.log("items is changed??");
    } else {
      console.log("setting first run");
      hasRunFirstTime.current = true;
    }
  }, [items]);

  function addItem(newItem) {
    setItems((old) => old.concat(newItem));
  }
  function deleteItem(id) {
    setItems((old) => old.filter((item) => item.id !== id));
  }
  function toggleCompleted(id) {
    //console.log(id, "skal toggles");
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
      <List
        items={items}
        deleteItem={deleteItem}
        toggleCompleted={toggleCompleted}
      />
    </main>
  );
}

export default App;
