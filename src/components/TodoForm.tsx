'use client';

import React, { useState } from 'react';
import { useAddTodoMutation } from '@/store/apiSlice';

export default function TodoForm() {
  const [task, setTask] = useState('');
  const [addTodo] = useAddTodoMutation();

  const handleAdd = async () => {
    if (!task.trim()) return;
    await addTodo({ id: Date.now().toString(), task, completed: false });
    setTask('');
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
