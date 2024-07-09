import React from 'react';
import styles from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => (
  <div className={styles.feedback}>
    <p>Good: {feedback.good}</p>
    <p>Neutral: {feedback.neutral}</p>
    <p>Bad: {feedback.bad}</p>
    <p>Total feedback: {totalFeedback}</p>
    <p>Positive feedback: {positiveFeedback}%</p>
  </div>
);

export default Feedback;