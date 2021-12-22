import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  border-radius: 50%;
  border: 1px solid black;
  padding: 5px 10px;
  min-width: 80px;
  cursor: pointer;
  color: white;
  background-color: rgba(39, 164, 236);

  font-weight: 600;
  font-size: 16px;
  line-height: 1.875;
  align-items: center;
  text-align: center;
`;

const FeedbackButtons = ({ feedbacks, submitFeedback }) => (
  <Wrapper>
    {feedbacks.map(feedback => (
      <Button
        type="button"
        key={feedback}
        onClick={() => submitFeedback(feedback)}
      >
        {feedback}
      </Button>
    ))}
  </Wrapper>
);

FeedbackButtons.propTypes = {
  feedbacks: PropTypes.array.isRequired,
  submitFeedback: PropTypes.func.isRequired,
};

export default FeedbackButtons;
