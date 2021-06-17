const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h3>{task.text}</h3>
      <button onDelete={() => onDelete(task.id)}>X</button>
    </div>
  );
};

Task.propTypes = {};

export default Task;
