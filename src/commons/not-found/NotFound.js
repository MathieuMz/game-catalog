import React from 'react';
import './not-found.scss';

export default class NotFound extends React.Component {

  render() {
    return (
      <div className="not-found">
        <div className="content">
          <p>You seem to be lost.</p>
          <a href="/">Back to catalog</a>
        </div>
      </div>
    );
  }
}
