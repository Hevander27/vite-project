import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card.jsx';
import './ShowCreators.css';

const ShowCreators = ({ creators }) => {
  return (
    <div className="show-creators">
      <h1>Content Creators</h1>
      <Link to="/new" className="add-creator-button">Add New Creator</Link>
      {creators.length > 0 ? (
        <div className="creators-grid">
          {creators.map(creator => (
            <Card
              key={creator.id}
              name={creator.name}
              url={creator.url}
              description={creator.description}
              imageURL={creator.imageURL}
            />
          ))}
        </div>
      ) : (
        <p>No content creators found. Add some!</p>
      )}
    </div>
  );
};

export default ShowCreators;
