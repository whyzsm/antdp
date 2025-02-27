import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Main = styled.main<{ isHome?: boolean }>`
  box-sizing: border-box;
  display: block;
  height: 100%;
  overflow: auto;
  scroll-behavior: smooth;

  ${(props) => props.isHome && `
    background-color: var(--home-background-color);
  `}
`;

export const Body = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  /* height: 100%; */
  width: 100%;
  position: relative;
  z-index: 1;
`;
