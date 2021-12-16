import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin: ${theme.spacings.medium};
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.large};
  `}
`;
