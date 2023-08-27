import styled from 'styled-components';

export const ButtonWrap = styled.div`
  text-align: center;
`;

export const Button = styled.button`
  margin-right: 10px;
  background-color: ${props => {
    switch (props.color) {
      case 'good':
        return 'green';
      case 'neutral':
        return 'orange';
      case 'bad':
        return 'red';
      default:
        break;
    }
  }};
  border: 0;
  border-radius: 6px;
  font-weight: 600;
  padding: 10px 15px;
  text-align: center;
  text-transform: capitalize;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;

  &:hover,
  :focus,
  :active {
    color: rgb(249, 250, 251);
  }
`;
