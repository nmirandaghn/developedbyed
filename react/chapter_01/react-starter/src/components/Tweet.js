import React from "react";

const Tweet = ({ name, tweet, tweets, setTweets }) => {
  const deleteHandler = () => {
    setTweets(tweets.filter((x) => x.id !== tweet.id));
  };

  const likeHandler = () => {
    alert("Like");
  };

  return (
    <div className="tweet">
      <h2>{name}</h2>
      <h3>{tweet.message}</h3>
      <button onClick={deleteHandler}>Delete</button>
      <button onClick={likeHandler}>Like</button>
    </div>
  );
};

export default Tweet;
