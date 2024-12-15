'use client';

import React from 'react';
import { useGetTodosQuery, useDeleteTodoMutation, useUpdateTodoMutation } from '@/store/apiSlice';

export default function TodoList() {
  const { data: todos = [], isLoading, isError } = useGetTodosQuery();
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading todos.</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            onClick={() => updateTodo({ id: todo.id, completed: !todo.completed })}
          >
            {todo.task}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
