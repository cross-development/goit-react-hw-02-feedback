//Core
import React from 'react';
import PropTypes from 'prop-types';
//Style
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	const { GOOD, NEUTRAL, BAD } = options;

	return (
		<div className={styles.buttonWrapper}>
			<button className={styles.feedbackButton} onClick={() => onLeaveFeedback(GOOD)}>
				Good
			</button>
			<button className={styles.feedbackButton} onClick={() => onLeaveFeedback(NEUTRAL)}>
				Neutral
			</button>
			<button className={styles.feedbackButton} onClick={() => onLeaveFeedback(BAD)}>
				Bad
			</button>
		</div>
	);
};

FeedbackOptions.propTypes = {
	options: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
