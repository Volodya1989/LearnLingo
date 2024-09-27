import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Hamburger from 'components/Hamburger';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

// import Loader from 'components/Loader';
import {
  StyledLink,
  StyledHeader,
  StyledList,
  StyledItem,
  Block,
  BlockRight,
  Logo,
  StyledLogin,
  StyledRegistration,
  HideMobile,
  MobileNav,
  StyledMobileItem,
} from './SharedLayout.styled';

const SharedLayout = () => {
  const dispatch = useDispatch();

  const { isLoggedIn, user, isVerified } = useAuth();
  console.log('isLoggedIn', isLoggedIn);
  console.log('isverified', isVerified);

  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <div>
      <StyledHeader>
        <Block>
          <StyledList>
            <StyledLink to="/" end>
              <img
                src={require('../../SVG/ukraine.svg').default}
                alt="Flag of Ukraine"
                width={28}
                height={28}
              />
              <Logo>LearnLingo</Logo>
            </StyledLink>
            <HideMobile>
              <StyledItem>
                <StyledLink to="/" end>
                  Home
                </StyledLink>
              </StyledItem>
            </HideMobile>
            <HideMobile>
              <StyledItem>
                <StyledLink to="/teachers" end>
                  Teachers
                </StyledLink>
              </StyledItem>
            </HideMobile>
          </StyledList>
          <div onClick={toggleHamburger}>
            <MobileNav hamburgeropen={hamburgerOpen.toString()}>
              <StyledMobileItem>
                <StyledLink to="/">Home</StyledLink>
              </StyledMobileItem>
              <StyledMobileItem>
                <StyledLink to="/teachers">Teachers</StyledLink>
              </StyledMobileItem>
              <StyledMobileItem>
                <StyledLink to="/login">Login</StyledLink>
              </StyledMobileItem>
              <StyledMobileItem>
                <StyledLink to="/registration">Registration</StyledLink>
              </StyledMobileItem>
            </MobileNav>
            <div onClick={toggleHamburger}>
              <Hamburger isopen={hamburgerOpen} />
            </div>
          </div>
        </Block>
        {isLoggedIn && isVerified ? (
          <BlockRight>
            <StyledList>
              <StyledItem onClick={() => dispatch(logOut())}>
                <StyledLink>
                  <img
                    src={require('../../SVG/log-in-01.svg').default}
                    alt="Log out"
                  />
                  <StyledLogin>Log Out </StyledLogin>
                </StyledLink>
              </StyledItem>
              <StyledItem>
                <StyledLink>
                  <StyledRegistration>
                    {' '}
                    Welcome, {user.username}
                  </StyledRegistration>
                </StyledLink>
              </StyledItem>
            </StyledList>
          </BlockRight>
        ) : (
          <BlockRight>
            <StyledList>
              <StyledItem>
                <StyledLink to="/login">
                  <img
                    src={require('../../SVG/log-in-01.svg').default}
                    alt="Log in"
                  />
                  <StyledLogin>Log in</StyledLogin>
                </StyledLink>
              </StyledItem>
              <StyledItem>
                <StyledLink to="/registration">
                  <StyledRegistration> Registration</StyledRegistration>
                </StyledLink>
              </StyledItem>
            </StyledList>
          </BlockRight>
        )}
      </StyledHeader>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
