import { memo } from 'react';
import styled from 'styled-components';

const H1: React.FC = memo(styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
`);

export default H1;
