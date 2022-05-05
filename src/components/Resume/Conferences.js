import React from 'react';
import PropTypes from 'prop-types';

import Conference from './Conferences/Conference';

const Conferences = ({ data }) => (
  <div className="conferences">
    <div className="link-to" id="conferences" />
    <div className="title">
      <h3>Conferences</h3>
    </div>
    {data.map((conference) => (
      <Conference
        data={conference}
        key={conference.title}
      />
    ))}
  </div>
);

Conferences.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    talklink: PropTypes.string.isRequired,
    conference: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    date: PropTypes.string,
  })),
};

Conferences.defaultProps = {
  data: [],
};

export default Conferences;
