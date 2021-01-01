import { memo } from 'react';
import styled from 'styled-components';

// add in inteface for options when it's done
type DropdownProps = {
  options: [];
  onChange: () => void;
  value: string;
};

const Dropdown: React.FC<DropdownProps> = memo(({ options, value, onChange }) => (
  <StyledDropdown value={value}>
    {options.map((option) => (
      <Option></Option>
    ))}
  </StyledDropdown>
));

const StyledDropdown = styled.select``;

const Option = styled.option``;

export default Dropdown;
