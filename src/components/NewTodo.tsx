import { useRef, useState } from "react";

const NewTodo = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = inputRef.current?.value;
  };

  return (
    <form onSubmit={submitFormHandler}>
      <label htmlFor="text">Title</label>
      <input type="text" id="text" ref={inputRef} required />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
