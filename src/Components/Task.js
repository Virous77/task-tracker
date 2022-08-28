import TTasks from "./TTasks";

const Task = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((item) => (
        <TTasks
          key={item.id}
          task={item}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Task;
