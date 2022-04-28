import React from 'react';
import PropTypes from 'prop-types';

const Conference = ({ data }) => (
  <article className="conference-container">
    <header>
      <h4><a href={data.link}>{data.conference}</a> - {data.title}</h4>
      <p className="authors"> {data.authors}</p>
      <p className="daterange"> {data.date}</p>
    </header>
  </article>
);

Conference.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    conference: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.string,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Conference;
