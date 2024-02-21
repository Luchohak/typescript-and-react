import { useRef, useState } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = inputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitFormHandler} className={classes.form}>
      <label htmlFor="text">Title</label>
      <input type="text" id="text" ref={inputRef} required />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
