"use client";

import getRandomValue from "@/lib/get-random-value";
import { useState } from "react";

export default function Counter() {
  const [state, setState] = useState(10);

  async function handleClick() {
    const value = await getRandomValue();
    setState(value);
  }

  return (
    <form
      className="text-white"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label> Counter: {state} </label>
      <button className="ml-4 p-2 bg-gray-600 rounded-md" onClick={handleClick}>
        Randomize
      </button>
    </form>
  );
}
