import React from "react";

const Tweet = ({ name, message }) => {
  const deleteHandler = () => {
    alert("Delete");
  };

  const likeHandler = () => {
    alert("Like");
  };

  return (
    <div className="tweet">
      <h2>{name}</h2>
      <h3>{message}</h3>
      <button onClick={deleteHandler}>Delete</button>
      <button onClick={likeHandler}>Like</button>
    </div>
  );
};

export default Tweet;
