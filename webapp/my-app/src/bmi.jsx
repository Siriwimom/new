import React, { useRef, useState } from "react";

function BmiText({ bmi }) {
  if (bmi < 18.5) return <h1>Underweight</h1>;
  if (bmi > 30) return <h1>Overweight</h1>;
  return <h1>Normal</h1>;
}

export default function Bmi() {
  const H_InputRef = useRef(null);
  const W_InputRef = useRef(null);
  const [bmi, setBmi] = useState(0.0);

  function CalculateBmi() {
    let w = parseFloat(W_InputRef.current.value);
    let h = parseFloat(H_InputRef.current.value) / 100;
    setBmi(w / (h * h));
  }

  return (
    <div>
      Weight: <input ref={W_InputRef} type="number" /> kg
      <br />
      Height: <input ref={H_InputRef} type="number" /> cm
      <br />
      <button onClick={CalculateBmi}>Calculate</button>
      <br />
      Bmi: {bmi.toFixed(2)}
      <BmiText bmi={bmi} />
    </div>
  );
}
