import React from "react";
import './Userbox.scss';

export const Userbox = ({user}) => (
  <div>
  <li>
    <a href="/dashboard">
      <img className="profilePhoto"  src={user.photoURL} />
    </a>
  </li>
    <p><b>{user.name}</b></p>
  </div>
);

