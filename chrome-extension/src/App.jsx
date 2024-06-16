import React from 'react';

function App() {
  const saveValue = () => {
    chrome.storage.local.set({ key: 'Hello, World!' }, () => {
      console.log('Value is set to Hello, World!');
    });
  };

  return (
    <div>
      <h1>Hello, World!</h1>
      <button onClick={saveValue}>Save Value</button>
    </div>
  );
}

export default App;
