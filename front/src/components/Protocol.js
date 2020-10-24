import React from 'react';
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';

const Protocol = ({
    protocol,
  }) => (
    <div className="single-cat">
      <pre>{protocol}</pre>
    </div>
  )
  
  Protocol.propTypes = {
    protocol: PropTypes.string.isRequired,
  }

export default Protocol;