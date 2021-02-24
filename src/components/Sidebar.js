import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/Sidebar.css";

function Sidebar() {

  const recentItem = (topic) => (
        <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
        </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://amymhaddad.s3.amazonaws.com/morocco-blue.png" alt="background" />
        <Avatar className="sidebar__avatar" />
        <h2>Satvik Sabharwal</h2>
        <h4>satviksabharwal7@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,700</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,456</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('nodejs')}
        {recentItem('angularjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  );
}

export default Sidebar;
