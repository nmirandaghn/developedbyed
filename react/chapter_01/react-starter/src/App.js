import React from "react";

function App() {
  const items = [1, 2, 3, 4];
  let items2 = items.map((x) => x ** 2);
  console.log(items2);

  return (
    <div className="box">
      <h1>Hello React</h1>
      <button>Submit</button>
    </div>
  );
}

export default App;
