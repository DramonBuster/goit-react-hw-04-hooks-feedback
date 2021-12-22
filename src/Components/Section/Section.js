import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 0;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 40px;
  text-align: center;

  font-size: 20px;
  font-weight: 700;
  color: black;
`;

const Section = ({ title, children }) => (
  <SectionWrapper>
    <Title>{title}</Title>
    <div>{children}</div>
  </SectionWrapper>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
