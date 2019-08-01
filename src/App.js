import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="topNav">
      </header>
      <div class="content">
        <a href="https://github.com/graytwentythree" target="_blank"><button class="button"><img id="git" src={require('./images/GitHub-Mark-Light-120px-plus.png')} alt="GitHub"></img></button></a>
        <a href="#"><button class="button">Projects</button></a>
        <a href="#"><button class="button"><img id="upwork" src={require('./images/upwork.png')} alt=""></img></button></a>
      </div>
    </div>
  );
}

export default App;
