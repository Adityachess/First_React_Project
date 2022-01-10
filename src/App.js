import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

class App extends Component {
  render() {
  return (
    <div className="App">
     {/* <Greet name = 'Aditya' heroName = 'Batman' >
        <p>This s childern props</p>
      </Greet>
      <Greet name = 'Anant' heroName = 'spiderman' >
        <button>Action</button>
      </Greet>
      <Greet name = 'akash' heroName = 'antman'/>
  
      <Welcome  name = 'Aditya' heroName = 'Antman' />
      <Welcome  name = 'Anant' heroName = 'Superman' />
      <Welcome  name = 'Akash' heroName = 'Spiderman' />/* }
     { <Hello /> }
     {/*<Message /> */}
     <Hello />
     <Counter />
  
    </div>
  );
}
}

export default App;
