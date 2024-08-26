import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ id, name, url, description, imageURL }) => {
  return (
    <div className="card">
      {imageURL && <img src={imageURL} alt={name} className="card-image" />}
      <div className="card-content">
        <h2 className="card-name">{name}</h2>
        <a href={url} target="_blank" rel="noopener noreferrer" className="card-url">
          {url}
        </a>
        <p className="card-description">{description}</p>
        <div className="card-actions">
          <Link to={`/creator/${id}`} className="view-button">View Details</Link>
          <Link to={`/edit/${id}`} className="edit-button">Edit</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

