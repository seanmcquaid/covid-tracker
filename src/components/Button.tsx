import { memo } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  onClick?: () => void;
  type: 'button' | 'submit';
  children: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = memo(({ onClick, type, children, disabled }) => (
  <StyledButton type={type} onClick={onClick} disabled={disabled}>
    {children}
  </StyledButton>
));

const StyledButton = styled.button`
  font-size: 0.75rem;
  font-family: 'Roboto', sans-serif;
  padding: 1rem;
  margin: 0.25rem;
  outline: none;
  border: none;
  background-color: black;
  color: white;
  border-radius: 6px;
  :disabled {
    background-color: grey;
    color: black;
  }
`;

export default Button;
