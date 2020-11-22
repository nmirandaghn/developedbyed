import React from "react";
import { v4 as uuidv4 } from "uuid";

const CreateTweet = ({ textInput, setTextInput, tweets, setTweets }) => {
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitTweetHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, { id: uuidv4(), message: textInput }]);
    setTextInput("");
  };

  return (
    <div>
      <form onSubmit={submitTweetHandler}>
        <textarea
          value={textInput}
          onChange={userInputHandler}
          name=""
          id=""
          cols="50"
          rows="5"
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateTweet;
