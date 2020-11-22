import React, { useState, useEffect } from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  const name = "Nelson Miranda";
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    console.log("Hello");
  }, [textInput]);

  return (
    <div>
      <h1>Hello {name}</h1>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
