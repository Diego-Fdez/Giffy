import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import '../styles/Gif.css';

const Gif = ({ id, title, url }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (title === '') {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [title]);
  return (
    <div className='Gif'>
      {loading ? (
        <p>Loading</p>
      ) : (
        <Link href={`/gif/${id}`} className='Gif-link'>
          <h4>{title}</h4>
          <img loading='lazy' src={url} alt={title} />
        </Link>
      )}
    </div>
  );
};

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
