import React from "react";

const CreateTweet = ({ textInput, setTextInput, tweets, setTweets }) => {
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitTweetHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, textInput]);
    setTextInput("");
    e.focus();
  };

  return (
    <div className="tweet">
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
