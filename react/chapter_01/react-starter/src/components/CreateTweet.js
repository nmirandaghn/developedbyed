import React, { useState } from "react";

const CreateTweet = () => {
  // State
  const [textInput, setTextInput] = useState("");

  const userInputHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="tweet">
      <form action="">
        <textarea
          onChange={userInputHandler}
          name=""
          id=""
          cols="15"
          rows="5"
        ></textarea>
        <button>Submit</button>
        <h1>TWEET INPUT</h1>
      </form>
    </div>
  );
};

export default CreateTweet;
