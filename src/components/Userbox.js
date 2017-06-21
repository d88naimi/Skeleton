import React from "react";
import './Userbox.scss';

export const Userbox = ({user}) => (
  <li>
    <a href="/dashboard">
      <img className="profilePhoto"  src={user.photoURL} />
    </a>
  </li>
);

