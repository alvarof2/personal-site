import React from 'react';
import PropTypes from 'prop-types';

import Publication from './Publications/Publication';

const Publications = ({ data }) => (
  <div className="publications">
    <div className="link-to" id="publications" />
    <div className="title">
      <h3>Selected Publications</h3>
      <p>Some publications resulting from my research work. A full list of my publications
        can be found at my <a href="https://www.linkedin.com/in/fernandezfalvaro">LinkedIn</a> or
        <a href="https://orcid.org/0000-0001-8719-831X"> ORCID</a> profiles.
      </p>
    </div>
    {data.map((publication) => (
      <Publication
        data={publication}
        key={publication.publication}
      />
    ))}
  </div>
);

Publications.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    publication: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    conference: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  })),
};

Publications.defaultProps = {
  data: [],
};

export default Publications;
