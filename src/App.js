import React, { useState } from 'react';
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

export default function App() {

  const [good, submitGood] = useState(0);
  const [neutral, submitNeutral] = useState(0);
  const [bad, submitBad] = useState(0);

  const submitFeedback = (option) => {
    switch (option) {
      case 'good':
        submitGood(good + 1);
        break;
      case 'neutral':
        submitNeutral(neutral + 1);
        break;
      case 'bad':
        submitBad(bad + 1);
        break;
      default:
        return;
    }
  }

  const feedbacks = { good, neutral, bad }

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    const positivePercentage = Math.round((good / total) * 100);
    return positivePercentage;
  };

  const total = countTotalFeedback();
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackButtons
          feedbacks={Object.keys(feedbacks)}
          submitFeedback={submitFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <FeedbackStatistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification>No feedback given!</Notification>
        )}
      </Section>
    </Container>
  );
};

