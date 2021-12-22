import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const StatisticsItem = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  text-align: left;
  font-size: 20px;
  font-weight: 700;
  color: black;

  :last-child {
    margin-bottom: 0px;
  }
`;

const FeedbackStatistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <Wrapper>
        <StatisticsItem>Good: {good}</StatisticsItem>
        <StatisticsItem>Neutral: {neutral}</StatisticsItem>
        <StatisticsItem>Bad: {bad}</StatisticsItem>
      </Wrapper>
      <StatisticsItem>Total: {total}</StatisticsItem>
      <StatisticsItem>Positive feedback: {positivePercentage} %</StatisticsItem>
    </div>
  );
};

FeedbackStatistics.defaultProps = {
  total: 0,
  positivePercentage: 0,
};

FeedbackStatistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default FeedbackStatistics;
