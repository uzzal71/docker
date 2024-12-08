import styled from "@emotion/styled";
import { FC, ReactNode } from "react";

const MainArea = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  background-color: #ffffff;
`;

interface IProps {
  children: ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => {
  return <MainArea>{children}</MainArea>;
};
