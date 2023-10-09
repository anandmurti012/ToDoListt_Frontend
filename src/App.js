
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useEffect, useState } from "react";
// import ToDo from "./components/ToDo";

// import Content from './components/Content';



function App() {

  return (
    <div className="App">
      {/* Authentication*/}
      <nav className="navbar">
        <div className="container-fluid">
          <span className="appName">
          Welcome to ToDoList App </span>
          <LoginButton />
        </div>
      </nav>
      <div className='content'>ToDoList</div>
      
      <LogoutButton />
      {/* <Content /> */}
      {/*====================== */}

    </div>
  );
}

export default App;
