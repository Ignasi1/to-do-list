import React from 'react';
import TaskDueDate from './TaskDueDate'; // Importem el component de data

const TaskItem = ({ task, onToggleComplete, onDeleteTask, onUpdateTaskDate }) => {
  return (
    <li key={task.id} className={task.completed ? 'completed' : ''}>
      {/* Bloque de contenido (texto + fecha) */}
      <div className="task-content">
        <span onClick={() => onToggleComplete(task.id)}>
          {task.text}
        </span>

        {/* Selector de data */}
        <TaskDueDate
          taskId={task.id}
          dueDate={task.dueDate}
          onUpdateTaskDate={onUpdateTaskDate}
        />
      </div>

      {/* Acciones en una fila separada (fuera del “slot” del DatePicker) */}
      <div className="task-actions" style={{ marginTop: 8 }}>
        <button onClick={() => onDeleteTask(task.id)}>Eliminar</button>
      </div>
    </li>
  );
};

export default TaskItem;
