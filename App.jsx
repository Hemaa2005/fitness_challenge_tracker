import React from 'react';
import Homepage from './HomeScreen/Homepage'; 
import NavTop from './HomeScreen/Navigation/NavTop';

const App = () => {
  return (
    <div className="App">
      <NavTop /> {/* Render the NavTop component at the top */}
      <Homepage /> {/* Render the Homepage component */}
    </div>
  );
}

export default App;
