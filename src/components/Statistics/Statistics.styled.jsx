import styled from 'styled-components';

export const Paragraf = styled.p`
  text-align: center;
  margin-bottom: 10px;
`;

export const FeedbackPercentage = styled(Paragraf)`
  color: ${props => {
    if (props.value < 40) {
      return 'red';
    } else if (props.value >= 40 && props.value <= 60) {
      return 'orange';
    } else if (props.value > 60) {
      return 'green';
    }
  }};
`;
