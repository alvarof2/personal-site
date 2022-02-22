import React from 'react';
import PropTypes from 'prop-types';

const Certification = ({ data }) => (
  <article className="certifications-container">
    <header>
      <h4><a href={data.link}>{data.title}</a> - {data.company}</h4>
      <p className="daterange"> {data.daterange}</p>
    </header>
  </article>
);

Certification.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
  }).isRequired,
};

export default Certification;
