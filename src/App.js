import { useEffect, useState } from "react";

export default function App() {
  const [advice, setadvice] = useState("");
  const [count, setcount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setadvice(data.slip.advice);
    setcount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Check this</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return <p> You have read this {props.count} number of times</p>;
}
