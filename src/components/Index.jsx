import React from "react";
import s from "./main.module.css";
const Index = ({ todo }, { done }) => {
  return (
    <div className={s.main}>
      <h1>Todo List</h1>
      <h2>
        {todo} more to do {done}
      </h2>
    </div>
  );
};

export default Index;
