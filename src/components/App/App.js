//Core
import React, { Component } from 'react';
//Components
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
//Style
import './App.module.css';

//IEnumerable
const Feedback = {
	GOOD: 'good',
	NEUTRAL: 'neutral',
	BAD: 'bad',
};

export class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	updateFeedbackCount = type => {
		this.setState(prevState => {
			return {
				[type]: prevState[type] + 1,
			};
		});
	};

	countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;

		return good + neutral + bad;
	};

	countPositiveFeedbackPercentage = () => {
		return Math.round((this.state.good / this.countTotalFeedback()) * 100);
	};

	render() {
		const { good, neutral, bad } = this.state;

		const totalFeedback = this.countTotalFeedback();
		const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

		return (
			<>
				<Section title="Please leave feedback">
					<FeedbackOptions options={Feedback} onLeaveFeedback={this.updateFeedbackCount} />
				</Section>

				<Section title="Statistics">
					{!totalFeedback ? (
						<Notification message="No feedback given" />
					) : (
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={totalFeedback}
							positivePercentage={positiveFeedbackPercentage}
						/>
					)}
				</Section>
			</>
		);
	}
}

export default App;
