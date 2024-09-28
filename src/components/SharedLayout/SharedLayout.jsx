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
  LoggedInName,
} from './SharedLayout.styled';

const SharedLayout = () => {
  const dispatch = useDispatch();

  const { isLoggedIn, user, isVerified } = useAuth();
  console.log('user', user);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  const onLogOut = () => {
    dispatch(logOut()).then(data => {
      try {
        console.log(data);
        if (!data?.error?.message) {
          window.location.href =
            'https://volodya1989.github.io/learn-lingo/#/login';
        }
      } catch (error) {}
    });
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
              {isLoggedIn ? <LoggedInName>{user.username}</LoggedInName> : ''}
              <StyledMobileItem>
                <StyledLink to="/">Home</StyledLink>
              </StyledMobileItem>
              <StyledMobileItem>
                <StyledLink to="/teachers">Teachers</StyledLink>
              </StyledMobileItem>
              <StyledMobileItem>
                {isLoggedIn ? (
                  <StyledLink to="/login" onClick={() => onLogOut()}>
                    Log Out
                  </StyledLink>
                ) : (
                  <StyledLink to="/login">Log In</StyledLink>
                )}
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
              <StyledItem onClick={() => onLogOut()}>
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
                    {user.username[0].toUpperCase() + user.username.slice(1)}
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
                  <StyledLogin>Log In</StyledLogin>
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
