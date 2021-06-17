const AddTask = (props) => {
  return (
    <form action="" className="add-form">
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input type="text" placeholder="Add Task" />
      </div>
      <input type="submit" />
    </form>
  );
};

AddTask.propTypes = {};

export default AddTask;
