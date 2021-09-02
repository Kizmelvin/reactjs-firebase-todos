import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import { v4 as uuid } from "uuid/";
import FireBase from "./Components/Firebase";
import Todos from "./Components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const saveTodo = (input) => {
    const saveToFirebase = FireBase.firestore();
    saveToFirebase.collection("todos").add({
      id: uuid(),
      item: input,
    });
  };
  const getTodos = () => {
    const getFromFirebase = FireBase.firestore().collection("todos");
    getFromFirebase.onSnapshot((querySnapShot) => {
      const saveFirebaseTodos = [];
      querySnapShot.forEach((doc) => {
        saveFirebaseTodos.push(doc.data());
      });
      setTodos(saveFirebaseTodos);
    });
  };

  return (
    <div className="App">
      <Header saveTodo={saveTodo} getTodos={getTodos} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
