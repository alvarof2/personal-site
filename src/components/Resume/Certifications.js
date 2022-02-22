import React from 'react';
import PropTypes from 'prop-types';

import Certification from './Certifications/Certification';

const Certifications = ({ data }) => (
  <div className="certifications">
    <div className="link-to" id="certifications" />
    <div className="title">
      <h3>Certifications</h3>
    </div>
    {data.map((certification) => (
      <Certification
        data={certification}
        key={certification.title}
      />
    ))}
  </div>
);

Certifications.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string.isRequired,
    daterange: PropTypes.string,
  })),
};

Certifications.defaultProps = {
  data: [],
};

export default Certifications;
