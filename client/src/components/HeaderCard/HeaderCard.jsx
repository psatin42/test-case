import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderCard.css';

export default function HeaderCard({ title, img }) {
  return (
    <Link to={`/${title}`} className="header-link">
      <div className="mycard">
        {title}
        <img src={img} alt="logo" className="header-image" />
      </div>
    </Link>
  );
}
