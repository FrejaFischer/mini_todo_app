import style from "./ListItem.module.css";
export default function ListITem({ task, completed, id, deleteItem, toggleCompleted }) {
  function deleteThis() {
    deleteItem(id);
  }
  return (
    <li>
      <p className={`${completed && style.completed}`}>{task}</p>
      <button
        className="secondary"
        onClick={() => {
          toggleCompleted(id);
        }}
      >
        {completed ? "Undo" : "Complete"}
      </button>
      <button className="secondary" onClick={deleteThis}>
        Delete
      </button>
    </li>
  );
}
