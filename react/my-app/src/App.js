import Header from './components/Header';
import { useState, useEffect } from 'react';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  const [tasks, setTasks] = useState([]);

  // For when page loads
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []); //dependencies

  // URL goes to db.json, calls GET or DELETE
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json;
    return data;
  };

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });
    setTasks(tasks.filter((x) => x.id != id));
  };

  // Add Task
  // await fetch(`http://localhost:5000/tasks/${id}`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(task),
  // });

  // Toggle Reminder
  const toggleReminder = async (id) => {
    // await fetch(`http://localhost:5000/tasks/${id}`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(task),
    // });
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
  };
  return (
    <Router>
      <div className="container">
        <Header title="Task Tracker"></Header>
        <Route
          path="/"
          exact
          render={(props) => {
            <Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={toggleReminder} />;
          }}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
