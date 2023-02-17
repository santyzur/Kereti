import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

function Card({ title, text, url }) {
  return (
    <div className="card text-center animate__animated animate__fadeInUp">
      <div className="card-body text-dark">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
        </p>
        <p className="card-text text-secondary" style={{color: '#00c2cb', textDecoration: 'line-through', fontSize: '15px'}}>
            $949.99
        </p>
        <p className="card-text text-primary" style={{color: '#00c2cb'}}>
            $849.99
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
};

export default Card;