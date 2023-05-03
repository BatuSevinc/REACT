import React from "react";
import { useState } from "react";
const App = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <button onClick={(a) => setValue(value + 1)}>Arttır</button>
      <div>{value}</div>
    </div>
  );
};
export default App;
