import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/todos')
      .then(res => setTodos(res.data))
      .catch(err => console.error(err));
  }, []);

  const addTodo = () => {
    if (!task.trim()) return;
    axios.post('http://127.0.0.1:5000/todos', { task })
      .then(res => {
        setTodos([...todos, res.data]);
        setTask('');
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

  return (
    <div style={{ padding: 20 }}>
      <h1>To-Do List</h1>
      <input
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => toggleComplete(todo)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {todo.task}
            </span>
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: 10 }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
