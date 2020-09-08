//Core
import React, { Component } from 'react';
//Components
import Section from '../Section';
import Statistics from '../Statistics';
import Notification from '../Notification';
import FeedbackOptions from '../FeedbackOptions';

//IEnumerable
const Feedback = {
	GOOD: 'good',
	NEUTRAL: 'neutral',
	BAD: 'bad',
};

export class App extends Component {
	state = {
		bad: 0,
		good: 0,
		neutral: 0,
	};

	updateFeedbackCount = type => {
		this.setState(prevState => ({ [type]: prevState[type] + 1 }));
	};

	countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;

		return good + neutral + bad;
	};

	countPositiveFeedbackPercentage = () =>
		Math.round((this.state.good / this.countTotalFeedback()) * 100);

	render() {
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
							{...this.state}
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
