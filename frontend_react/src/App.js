import React from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import EditUser from "./components/EditUser";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Users} />

        <Route exact path="/:id" component={EditUser} />
      </BrowserRouter>
    </div>
  );
}

export default App;
