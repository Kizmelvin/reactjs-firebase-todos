import React from "react";

function Todos({ todos }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
