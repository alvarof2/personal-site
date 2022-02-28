import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree"><a href={data.title}>{data.degree}</a></h4>
      <p className="school"><a href={data.link}>{data.school}</a>, {data.year}</p>
    </header>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point[0]}><a href={point[1]}>{point[0]}</a></li>
      ))}
    </ul>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    points: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  }).isRequired,
};

export default Degree;
