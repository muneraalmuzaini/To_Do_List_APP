import TaskItem from './TaskItem';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [message, setMessage] = useState('');
  const [priority, setPriority] = useState('Medium');

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/todos')
      .then(res => setTodos(res.data))
      .catch(err => console.error(err));
  }, []);

  const addTodo = () => {
    if (!task.trim()) return;
    axios.post('http://127.0.0.1:5000/todos', { task, priority }) //priority
      .then(res => {
        setTodos([...todos, res.data]);
        setTask('');
        setMessage('✅ Task added!');
        setTimeout(() => setMessage(''), 2000);
        setPriority('Medium'); // reset to default
      });
  };

  const toggleComplete = (todo) => {
    axios.put(`http://127.0.0.1:5000/todos/${todo.id}`, {
      ...todo,
      completed: !todo.completed
    }).then(res => {
      setTodos(todos.map(t => t.id === todo.id ? res.data : t));
    });
  };

  const deleteTodo = (id) => {
    axios.delete(`http://127.0.0.1:5000/todos/${id}`).then(() => {
      setTodos(todos.filter(t => t.id !== id));
    });
  };
  const editTodo = (todo) => {
  const newTask = prompt('Edit task:', todo.task);
  if (newTask && newTask.trim() !== '') {
    axios.put(`http://127.0.0.1:5000/todos/${todo.id}`, {
      ...todo,
      task: newTask
    }).then(res => {
      setTodos(todos.map(t => t.id === todo.id ? res.data : t));
    });
  }
};
const sortTodosByPriority = (todos) => {
  const priorityOrder = { High: 1, Medium: 2, Low: 3 };
  return [...todos].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
};


  return (
    <div style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
      <h1 style={{ color: '#007acc', fontSize: '2rem', marginBottom: '20px' }}>
        📝 Task Manager
      </h1>

      {message && (
        <p style={{ color: 'green', fontWeight: 'bold' }}>{message}</p>
      )}

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
  <input
    value={task}
    onChange={e => setTask(e.target.value)}
    placeholder="Add new task"
    style={{
      padding: '10px',
      flex: 1,
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc'
    }}
  />
  <select
    value={priority}
    onChange={e => setPriority(e.target.value)}
    style={{
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      backgroundColor: '#f9f9f9'
    }}
  >
    <option value="High">High</option>
    <option value="Medium">Medium</option>
    <option value="Low">Low</option>
  </select>
  <button
    onClick={addTodo}
    style={{
      padding: '10px 15px',
      backgroundColor: '#007acc',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    }}
  >
    Add
  </button>
</div>


      <ul style={{ listStyle: 'none', padding: 0 }}>
        {sortTodosByPriority(todos).map(todo => (
          <TaskItem
            key={todo.id}
            todo={todo}
            onToggle={toggleComplete}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;