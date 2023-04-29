import { Component } from 'react';
import styles from './App.module.css';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = type =>
    this.setState(state => ({ ...state, [type]: state[type] + 1 }));

  render() {
    const { good, neutral, bad } = this.state;

    const countTotalFeedback = () => good + neutral + bad;
    const countPositiveFeedbackPercentage = () =>
      (good / (good + (neutral + bad))) * 100;

    return (
      <div className={styles.Feedback}>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleLeaveFeedback}
        />

        {countTotalFeedback() ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
