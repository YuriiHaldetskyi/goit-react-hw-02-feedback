import { FeedbackOptions } from 'components/FeedBackOptions/feedbackoptions';
import { Statictics } from 'components/Statistics/Statistics';
import React, { Component } from 'react';
import css from '../feedbacks/Section.module.css';
import PropTypes from 'prop-types';

export class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleInrementGood = () => {
    return this.setState({ good: this.state.good + 1 });
  };
  handleInrementNeutral = () => {
    return this.setState({ neutral: this.state.neutral + 1 });
  };
  handleInrementBad = () => {
    return this.setState({ bad: this.state.bad + 1 });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const Percentage = Math.round((good / total) * 100);
    return (
      <section className={css.section}>
        <h1 className={css.feedback__title}>Please leave feedback</h1>

        <FeedbackOptions
          onHandleInrementGood={this.handleInrementGood}
          onHandleInrementNeutral={this.handleInrementNeutral}
          onHandleInrementBad={this.handleInrementBad}
        />

        <Statictics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={Percentage}
        />
      </section>
    );
  }
}

Section.propType = {
  state: PropTypes.oneOfType([PropTypes.number]),
};
