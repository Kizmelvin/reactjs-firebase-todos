import React, { useState } from "react";

function Header({ saveTodo, getTodos }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTodo(input);
    setInput("");
    getTodos();
  };

  return (
    <>
      <center>
        <form onSubmit={handleSubmit}>
          <h1 className="title">My Todos</h1>
          <div className="input">
            <input
              type="text"
              required
              placeholder="What do you need to do today?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </center>
    </>
  );
}

export default Header;
