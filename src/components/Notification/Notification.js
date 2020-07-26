//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './Notification.module.css';

const Notification = ({ message }) => (
	<div className={styles.notification}>
		<p className={styles.message}>{message}</p>
	</div>
);

Notification.defaultProps = {
	message: 'No feedback information',
};

Notification.propTypes = {
	message: PropTypes.string,
};

export default Notification;
