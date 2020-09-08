//Core
import React from 'react';
import PropTypes from 'prop-types';
//Style
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	const { GOOD, NEUTRAL, BAD } = options;

	return (
		<div className={styles.buttonWrapper}>
			<button className={styles.button} onClick={() => onLeaveFeedback(GOOD)}>
				Good
			</button>
			<button className={styles.button} onClick={() => onLeaveFeedback(NEUTRAL)}>
				Neutral
			</button>
			<button className={styles.button} onClick={() => onLeaveFeedback(BAD)}>
				Bad
			</button>
		</div>
	);
};

FeedbackOptions.propTypes = {
	onLeaveFeedback: PropTypes.func.isRequired,
	options: PropTypes.exact({
		BAD: PropTypes.string.isRequired,
		GOOD: PropTypes.string.isRequired,
		NEUTRAL: PropTypes.string.isRequired,
	}).isRequired,
};

export default FeedbackOptions;
