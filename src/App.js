import { useRef, useState } from 'react';
import './App.css';
import useRandomJoke from './useRandomJoke';


function App() {

  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)

  
  const [firstName ,setFirtName] = useState('Peter')
  const [lastName ,setLastName] = useState('Kyalo')
  
  const joke = useRandomJoke(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirtName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div className="App">
      <h1>The Joke Generator</h1>
      <h2>{joke}</h2>
      <form>
        <input placeholder='first name' ref={firstNameRef}/>
        <input placeholder='first name' ref={lastNameRef}/>
        <button onClick={generateJoke}>Generate Joke</button>
      </form>
    </div>
  );
}

export default App;
