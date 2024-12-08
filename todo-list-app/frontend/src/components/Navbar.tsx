import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  margin-bottom: 20px;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0 1rem;
  }

  a {
    text-decoration: none;
    color: #000000;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: #0056b3;
    }
  }
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>
        <Link to="/">Todoist</Link>
      </Logo>
      <NavList>
        <li>
          <Link to="/profile">Histories</Link>
        </li>
      </NavList>
    </NavbarContainer>
  );
};
