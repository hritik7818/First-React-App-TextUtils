import React, { useState } from 'react';

export default function Test() {
  const [st, setSt] = useState(0);
  return (
    <div>
      <h1>You clicked button {st} Times</h1>
      <button onClick={() => {
        setSt(st + 1);
      }}>Click me</button>
    </div>
  );
}
