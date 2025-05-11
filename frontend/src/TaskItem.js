import React from 'react';

export default function TaskItem({ todo, onToggle, onDelete, onEdit }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return '#e74c3c'; // Red
      case 'Medium':
        return '#f39c12'; // Orange
      case 'Low':
        return '#2ecc71'; // Green
      default:
        return '#95a5a6'; // Grey
    }
  };

  return (
    <li
      style={{
        backgroundColor: '#f4f4f4',
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '5px',
        borderLeft: `6px solid ${getPriorityColor(todo.priority)}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <div style={{ flex: 1, cursor: 'pointer' }} onClick={() => onToggle(todo)}>
        <div
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            fontWeight: 'bold'
          }}
        >
          {todo.task}
        </div>
        <div style={{ fontSize: '14px', color: getPriorityColor(todo.priority) }}>
          Priority: {todo.priority}
        </div>
      </div>

      <button
        onClick={() => onEdit(todo)}
        style={{
          marginLeft: '10px',
          padding: '5px 10px',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Edit
      </button>

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
