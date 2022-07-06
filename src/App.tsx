import { useState } from "react";
import { Todo } from "./model";
import "./App.scss";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (text) {
      setTodos([...todos, { id: Date.now(), text, isDone: false }]);
      setText("");
    }
  };

  console.log(todos);

  return (
    <>
      <span className="header">Todo-List</span>
      <InputTodo text={text} setText={setText} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default App;
