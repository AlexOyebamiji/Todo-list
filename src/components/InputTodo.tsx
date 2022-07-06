import React, { useState } from "react";
import { Todo } from "../model";
import "../App.scss";

interface Props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputTodo: React.FC<Props> = ({ text, setText, handleAdd }) => {
  return (
    <>
      <form className="input" onSubmit={(e) => handleAdd(e)}>
        <input
          type="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Todo"
          className="input-text"
        />
        <button className="create-button">create</button>
      </form>
    </>
  );
};

export default InputTodo;
