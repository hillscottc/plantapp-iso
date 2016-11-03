
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Feedback.css';

function Feedback() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <a
          className={s.link}
          href="https://github.com/hillscottc/plantapp-iso/issues/new"
        >Ask a question or report an issue</a>
      </div>
    </div>
  );
}

export default withStyles(s)(Feedback);
