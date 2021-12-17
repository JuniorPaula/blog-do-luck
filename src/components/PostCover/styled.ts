import styled, { css } from 'styled-components';

export const Container = styled.img`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: ${theme.spacings.medium};
  `}
`;
