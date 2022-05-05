import React from 'react';
import PropTypes from 'prop-types';

const Conference = ({ data }) => (
  <article className="conference-container">
    <header>
      <h4><a href={data.link}>{data.conference}</a> - <a href={data.talklink}>{data.title}</a></h4>
      <p className="authors">
        {data.authors.map((point, i, array) => {
          if (i === array.length - 1) {
            return (
              <> and <a href={point[1]}>{point[0]}</a>.</>
            );
          }
          return (<><a href={point[1]}>{point[0]}</a>, </>);
        })}
      </p>
      <p className="daterange"> {data.date}</p>
    </header>
  </article>
);

Conference.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    talklink: PropTypes.string.isRequired,
    conference: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Conference;
