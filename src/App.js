import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets.js";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* Sidebar*/}
      <Feed />

      {/* Feed */}
      <Widgets />
      {/* Widget */}
    </div>
  );
}

export default App;
