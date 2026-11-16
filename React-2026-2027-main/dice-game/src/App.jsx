import { useState } from "react";

const faces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

export default function App() {
  const [diceIndex, setDiceIndex] = useState(0);

  function rollDice() {
    const random = Math.floor(Math.random() * 6);
    setDiceIndex(random);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "120px" }}>{faces[diceIndex]}</div>
      <p>You rolled: {diceIndex + 1}</p>
      <button onClick={rollDice}>Roll 🎲</button>
    </div>
  );
}
