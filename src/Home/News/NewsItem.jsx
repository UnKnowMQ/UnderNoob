import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card mt-3 bg-light text-dark mb-3 d-inline-block" style={{ maxWidth: "345px", width: "100%" }}>
      <img src={src} style={{ height: "200px", width: "100%", objectFit: "cover" }} className="card-img-top" alt="news" />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}{title.length > 50 ? '...' : ''}</h5>
        <p className="card-text">{description ? description.slice(0, 90) + (description.length > 90 ? '...' : '') : ''}</p>
        <a href={url} className="btn btn-primary">Read more</a>
      </div>
    </div>
  );
}

export default NewsItem;
