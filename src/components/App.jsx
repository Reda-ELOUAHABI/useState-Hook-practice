import React, { useState } from "react";
import Counter from "./Counter";
function App() {
  setInterval(updateTime, 1000);
  var now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);
  function updateTime() {
    now = new Date().toLocaleTimeString();
    setTime(now);
    //console.log(now);
    //hook=state+functional Componenet
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
      <Counter />
    </div>
  );
}

export default App;
/*


*/
