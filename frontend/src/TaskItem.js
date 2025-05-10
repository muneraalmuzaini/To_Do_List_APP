import React from 'react';

export default function TaskItem({ todo, onToggle, onDelete }) {
  return (
    <li
      style={{
        backgroundColor: '#f4f4f4',
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <span
        onClick={() => onToggle(todo)}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
          flex: 1
        }}
      >
        {todo.task}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        style={{
          marginLeft: '10px',
          padding: '5px 10px',
          backgroundColor: '#e74c3c',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Delete
      </button>
    </li>
  );
}

