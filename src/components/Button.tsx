import { memo } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  onClick?: () => void;
  type: 'button' | 'submit';
  children: String;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = memo(({ onClick, type, children, disabled }) => (
  <StyledButton type={type} onClick={onClick} disabled={disabled}>
    {children}
  </StyledButton>
));

const StyledButton = styled.button``;

export default Button;
