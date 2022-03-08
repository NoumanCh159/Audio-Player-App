import './App.css';
import './CardMQ.css';
import Nav from './Cmps/Nav/Nav.js'
import Card from './Cmps/Card/Card.js';
function App() {
  return (
    <div className="App">
      <Nav/>
      <h1 className="heading">Let the Music Speak!</h1>
        <div className="AudioGroup">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
        </div>
    </div>
  );
}

export default App;
