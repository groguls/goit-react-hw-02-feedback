import { v4 as uuidv4 } from 'uuid';
import { Button, ButtonWrap } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrap>
      {options.map(option => (
        <Button
          color={option}
          key={uuidv4()}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </ButtonWrap>
  );
};
