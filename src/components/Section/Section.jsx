import { SectionHeader, StyledSection } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <SectionHeader>{title}</SectionHeader>
      {children}
    </StyledSection>
  );
};
