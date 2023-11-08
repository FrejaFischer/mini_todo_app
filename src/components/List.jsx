import ListItem from "./ListItem";

export default function List({ items, deleteItem, toggleCompleted }) {
  return (
    <section>
      <h2>Tasks</h2>
      <ul>
        {items
          .filter((item) => !item.completed)
          .map((item) => (
            <ListItem toggleCompleted={toggleCompleted} deleteItem={deleteItem} key={item.id} {...item} />
          ))}
      </ul>
      <h2>Finish tasks</h2>
      <ul>
        {items
          .filter((item) => item.completed)
          .map((item) => (
            <ListItem toggleCompleted={toggleCompleted} deleteItem={deleteItem} key={item.id} {...item} />
          ))}
      </ul>
    </section>
  );
}
