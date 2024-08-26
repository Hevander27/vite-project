import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';
import './ViewCreator.css'; // You'll need to create this CSS file

const ViewCreator = () => {
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('creators')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setCreator(data);
      } catch (error) {
        setError('Error fetching creator: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCreator();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!creator) return <div>No creator found</div>;

  return (
    <div className="view-creator">
      <h2>{creator.name}</h2>
      {creator.imageURL && (
        <img src={creator.imageURL} alt={creator.name} className="creator-image" />
      )}
      <p><strong>URL:</strong> <a href={creator.url} target="_blank" rel="noopener noreferrer">{creator.url}</a></p>
      <p><strong>Description:</strong> {creator.description}</p>
      <div className="creator-actions">
        <Link to={`/edit/${creator.id}`} className="edit-button">Edit Creator</Link>
        <Link to="/" className="back-button">Back to all creators</Link>
      </div>
    </div>
  );
};

export default ViewCreator;
