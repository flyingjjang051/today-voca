import { useState, useRef } from "react";

export default function UseRefComponent() {
  const [count, setCount] = useState(0);
  const refCount = useRef(0);
  console.log(refCount); // {current:0}
  let varCount = 0;
  const incCount = () => {
    console.log("varCount===", varCount);
    console.log("refCount===", refCount.current);
    setCount(count + 1);
  };
  const incVarCount = () => {
    varCount++;
    console.log("varCount===", varCount);
  };
  const incRefCount = () => {
    refCount.current++;
    console.log("refCount.current===", refCount.current);
  };

  return (
    <>
      <div>
        <p style={{ color: "#fff", fontSize: 30 }}>{count}</p>
        <button style={{ padding: 20 }} onClick={incCount}>
          useState로 만드는 counter
        </button>
      </div>
      <div>
        <p style={{ color: "#fff", fontSize: 30 }}>{varCount}</p>
        <button style={{ padding: 20 }} onClick={incVarCount}>
          일반변수로 만드는 counter
        </button>
      </div>
      <div>
        <p style={{ color: "#fff", fontSize: 30 }}>{refCount.current}</p>
        <button style={{ padding: 20 }} onClick={incRefCount}>
          useRef 만드는 counter
        </button>
      </div>
    </>
  );
}
