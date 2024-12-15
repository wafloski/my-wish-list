'use client';

import React from 'react';

import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';

export default function TodoPage() {


  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}
