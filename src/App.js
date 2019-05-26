import React from 'react';
import MedianPrimeNumberForm from './containers/MedianPrimeNumberForm.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h3>Median Prime Number(s)</h3>
      </header>
      <div>
        <MedianPrimeNumberForm/>
      </div>
    </div>
  );
}

export default App;
