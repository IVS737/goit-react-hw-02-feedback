import { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div>
        {options.map(option => (
          <button key={option} onClick={() => onLeaveFeedback(option)}>
            {option.charAt(0).toUpperCase() + option.substring(1)}
          </button>
        ))}
      </div>
    );
  }
}
