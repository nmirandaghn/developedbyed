import React, { useState } from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  const [name, setName] = useState("Mauricio Miranda");

  const message = "Just like that";

  const changeTitle = () => {
    setName("Mauricio Miranda");
    console.log(name);
  };

  return (
    <div className="box">
      <h1>Hello {name}</h1>
      <CreateTweet />
      <TweetList name={name} message={message} />
      <button onClick={changeTitle}>Test</button>
    </div>
  );
}

export default App;
