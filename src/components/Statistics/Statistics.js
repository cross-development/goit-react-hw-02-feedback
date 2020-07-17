//Core
import React from 'react';
import PropTypes from 'prop-types';
//Style
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
	return (
		<div className={styles.listWrapper}>
			<ul className={styles.feedbackList}>
				<li className={styles.feedbackListItem}>Good: {good}</li>
				<li className={styles.feedbackListItem}>Neutral: {neutral}</li>
				<li className={styles.feedbackListItem}>Bad: {bad}</li>
				<li className={styles.feedbackListItem}>Total: {total}</li>
				<li className={styles.feedbackListItem}>
					Positive Feedback: {positivePercentage ? positivePercentage : 0}%
				</li>
			</ul>
		</div>
	);
};

Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
