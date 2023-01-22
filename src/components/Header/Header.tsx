import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: aliceblue;
  padding: 32px;
  font-size: 32px;
`;

export const Header = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};
