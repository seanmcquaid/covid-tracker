import { memo } from 'react';
import styled from 'styled-components';

type DropdownProps = {
  options: any[];
  onChange: () => void;
  value: any;
};

const Dropdown: React.FC<DropdownProps> = memo(({ options, value, onChange }) => (
  <StyledDropdown value={value} onChange={onChange} data-testid="dropdown">
    {options.map((option, i) => (
      <Option key={i}>{option}</Option>
    ))}
  </StyledDropdown>
));

const StyledDropdown = styled.select`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  outline: none;
`;

const Option = styled.option``;

export default Dropdown;
