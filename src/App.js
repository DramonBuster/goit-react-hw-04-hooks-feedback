import React, { Component } from 'react';
import './App.css';
import Section from './Components/Section/Section';
import FeedbackButtons from './Components/FeedbackButtons/FeedbackButtons';
import FeedbackStatistics from './Components/FeedbackStatistics/FeedbackStatistics';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  width: 300px;
`;

const Notification = styled.p`
  margin-bottom: 40px;
  text-align: center;
  padding: 5px;

  font-size: 20px;
  font-weight: 700;
  color: black;
  background-color: red;
`;

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  submitFeedback = feedback => {
    // проверить позже
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    const positivePercentage = Math.round((this.state.good / total) * 100);
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackButtons
            feedbacks={Object.keys(this.state)}
            submitFeedback={this.submitFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <FeedbackStatistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification>No feedback given!</Notification>
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
