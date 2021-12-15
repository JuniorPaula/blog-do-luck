import styled from 'styled-components';

export const Container = styled.main`
  max-width: 96rem;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  padding: ${({ theme }) => theme.spacings.medium};
`;
