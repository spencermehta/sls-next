import { useState } from "react";

const Ditto = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span> {count} </span>
      <button onClick={() => setCount((x) => x + 1)}>Click me</button>
    </div>
  );
};

export default Ditto;
