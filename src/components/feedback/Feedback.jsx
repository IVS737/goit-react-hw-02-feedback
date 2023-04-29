import { Component } from 'react';
import styles from './Feedback.module.css';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () => {
    this.setState(state => ({ ...state, good: state.good + 1 }));
  };

  handleClickNeutral = () => {
    this.setState(state => ({ ...state, neutral: state.neutral + 1 }));
  };

  handleClickBad = () => {
    this.setState(state => ({ ...state, bad: state.bad + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    const countTotalFeedback = () => good + neutral + bad;
    const countPositiveFeedbackPercentage = () =>
      (good / (good + (neutral + bad))) * 100;
    return (
      <div className={styles.Feedback}>
        <h1 className={styles.Title}>Please leave feedback</h1>
        <div className={styles.ButtonList}>
          <button onClick={this.handleClickGood} type="button">
            Good
          </button>
          <button onClick={this.handleClickNeutral} type="button">
            Neutral
          </button>
          <button onClick={this.handleClickBad} type="button">
            Bad
          </button>
        </div>
        <div className={styles.Statistic}>
          <h2>Statistics</h2>
          <p>Good:{good}</p>
          <p>Neutral:{neutral}</p>
          <p>Bad:{bad}</p>
          <p>Total: {countTotalFeedback()}</p>
          <p>
            Positive feedback: {countPositiveFeedbackPercentage().toFixed(2)}%
          </p>
        </div>
      </div>
    );
  }
}
