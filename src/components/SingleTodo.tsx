import { Todo } from "../model";
import { MdCancel } from "react-icons/md";
import "../App.scss";

interface Props {
  text: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ text, todos, setTodos }: Props) => {
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="container">
        <form className="display-todos">
          {text.text}
          <MdCancel onClick={() => handleDelete(text.id)} />
        </form>
      </div>
    </>
  );
};

export default SingleTodo;
