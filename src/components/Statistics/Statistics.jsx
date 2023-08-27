import { FeedbackPercentage, Paragraf } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Paragraf>Good: {good}</Paragraf>
      <Paragraf>Neutral: {neutral}</Paragraf>
      <Paragraf>Bad: {bad}</Paragraf>
      <Paragraf>Total: {total}</Paragraf>
      <FeedbackPercentage value={positivePercentage}>
        Positive feedback: {positivePercentage}%
      </FeedbackPercentage>
    </>
  );
};
