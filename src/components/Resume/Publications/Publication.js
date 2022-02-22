import React from 'react';
import PropTypes from 'prop-types';

const Publication = ({ data }) => (
  <article className="publication-container">
    <header>
      <h4 className="publication">{data.publication}</h4>
      <p className="school"><a href={data.link}>{data.conference}</a>, {data.year}</p>
    </header>
  </article>
);

Publication.propTypes = {
  data: PropTypes.shape({
    publication: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    conference: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Publication;
