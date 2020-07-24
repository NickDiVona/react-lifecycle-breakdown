import React, { useState } from 'react';
import ClassComponent from './components/classComponent';
import HooksComponent from './components/hooksComponent';

function App() {
  const [isRed, setIsRed] = useState(false);
  const [count, setCount] = useState(0);

  const renderSquare = () => {
    if (isRed === true) {
      return (
        <HooksComponent
          count={count}
          incrementCount={() => setCount(count + 1)}
        />
      );
    }

    return (
      <ClassComponent
        count={count}
        incrementCount={() => setCount(count + 1)}
      />
    );
  };

  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {renderSquare()}
      <button
        style={{ height: 40, width: 120 }}
        onClick={() => setIsRed(!isRed)}
      >
        Switch
      </button>
    </div>
  );
}

export default App;
