import React from "react";
import './Userbox.scss';

export const Userbox = ({user}) => (
  <div>
    <div className>
      <a href="/dashboard">
        <img className="profilePhoto"  src={user.photoURL} />
      </a>
      <p  className="hello"><b>{user.name}</b></p>
    </div>
  </div>
);