import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ title, image, date, text, id_post }) => {
  return (
    <Link to={"/blog/"+id_post}>
      <div className="post">
        {image && <img src={require(`../images/${image}`)} alt={title} />}
        <h2>{title}</h2>
        <p><strong>Fecha:</strong>{date}</p>
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default Post;