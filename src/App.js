import { useState } from 'react';
import './App.css';
import Amazon from './components/Amazon';
import Navbar from './components/Navbar';

function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <Navbar setShow={setShow} />
      {show ? <Amazon /> : "Cart"}
    </div>
  );
}

export default App;
