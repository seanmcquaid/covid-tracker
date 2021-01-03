import { memo } from 'react';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

const LoadingSpinner = memo(() => (
  <div data-testid="loadingSpinner">
    <StyledLoadingSpinner />
  </div>
));

const StyledLoadingSpinner = styled(ClipLoader)``;

export default LoadingSpinner;
