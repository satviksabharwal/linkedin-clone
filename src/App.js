import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import {selectUser} from "./features/userSlice";

function App() {

  const user = useSelector(selectUser);

  return (
    <div className="app">
      {/*Header*/}
      <Header />

      {!user ? (<Login />) : (<div className="app__body">
      <Sidebar />
      <Feed />

      {/*Widget (Right side bar)*/}
    </div>)}
    </div>
  );
}

export default App;
