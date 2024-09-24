import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 400;
  display: flex;
  align-itmes: center;
  font-size: 16px;
  line-height: calc(20 / 16);
  max-width: 1250px;

  &:hover {
    color: gray;
  }
`;
export const Logo = styled.span`
  size: 50px;
  font-weight: 500;
  font-size: 20px;
  line-height: calc(20 / 24);
  display: flex;
  align-items: center;
  padding-left: 5px;
  padding-right: 50px;

  @media screen and (min-width: 768px) {
    padding-right: 150px;
  }
  @media screen and (min-width: 1150px) {
    padding-right: 430px;
  }
`;

export const StyledLogin = styled.span`
  font-weight: 700;
  padding-left: 5px;
`;
export const HideMobile = styled.span`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const StyledRegistration = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  background: black;
  border-radius: 12px;
  width: 166px;
  height: 48px;
  color: #fff;
`;

export const StyledHeader = styled.nav`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 40px;
  padding-bottom: 40px;
  color: #fff;
  background: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
  list-style: none;
  text-decoration: none;
`;

export const Block = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4 em;
`;
export const BlockRight = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: right;
    align-items: center;
  }
`;

export const StyledItem = styled.li`
  text-decoration: none;
`;

export const MobileNav = styled.ul`
  display: ${({ hamburgerOpen }) => (hamburgerOpen ? 'inline' : 'none')};
  list-style: none;
  text-decoration: none;
  background-color: white;
  height: 100vh;
  width: 100vw;
  margin-top: 50px;
  padding-top: 50px;
  position: absolute;
  top: 20px;
  left: -2px;
  color: black;
`;

export const StyledMobileItem = styled(StyledItem)`
  &:hover {
    color: #f4c550;
  }
  margin-bottom: 10px;
`;
