"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);

  //console.log(users); // as a client server side it will be logged in console

  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
}
