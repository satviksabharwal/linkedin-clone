import React from "react";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      {/*Header*/}
      <Header />

      {/* App Body */}
      <div className="app__body">
        <Sidebar />
        <Feed />

        {/*Widget (Right side bar)*/}
      </div>
    </div>
  );
}

export default App;
