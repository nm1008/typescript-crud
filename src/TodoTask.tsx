import { Itask } from "./Interface";

interface Props {
  task: Itask;
  handleDeleteTask(index: number): void;
  handleUpdateTask(index: number): void;
  index: number;
}

const TodoTask = ({ index, task, handleDeleteTask, handleUpdateTask }: Props) => {
  return (
    <div className="todoTask">
      <h1>{task.task}</h1>
      <button onClick={() => handleUpdateTask(index)}>Update</button>
      <button onClick={() => handleDeleteTask(index)}>X</button>
    </div>
  );
};

export default TodoTask;
