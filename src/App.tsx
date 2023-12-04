import { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { Itask } from "./Interface";
import TodoTask from "./TodoTask";

const App: FC = () => {
  const [input, setInput] = useState<string>("");
  const [todoList, setTodoList] = useState<Itask[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleTodo = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const handleAddTask = () => {
    if (editIndex !== null) {
      const updatedList = [...todoList];
      updatedList[editIndex].task = input;
      console.log(updatedList);
      setTodoList(updatedList);
      setEditIndex(null);
    } else {
      const newTask = { task: input };
      setTodoList([...todoList, newTask]);
      console.log(todoList);
    }
    setInput("")
  };

  const handleDeleteTask = (index: number): void => {
    setTodoList(
      todoList.filter((item, i) => {
        return i !== index;
      })
    );
  };

  const handleUpdateTask = (index: number): void => {
    setInput(todoList[index].task);
    setEditIndex(index);
    console.log(index);
  };

  return (
    <>
      <div>
        <h1>REACT CRUD TYPESCRIPT</h1>
        <input type="text" placeholder="What todo?" value={input} onChange={handleTodo} />
        <button onClick={handleAddTask}>
          {editIndex === null ? "Submit" : "Update"}
        </button>
      </div>

      <div className="todoList">
        {todoList.map((task: Itask, key: number) => {
          return (
            <TodoTask
              key={key}
              index={key}
              task={task}
              handleDeleteTask={handleDeleteTask}
              handleUpdateTask={handleUpdateTask}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
