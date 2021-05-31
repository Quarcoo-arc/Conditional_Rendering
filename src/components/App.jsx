import React from "react";
import { Login, Register } from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">{userIsRegistered ? Login() : Register()}</div>
  );
}

export default App;
