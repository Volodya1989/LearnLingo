import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Hamburger from 'components/Hamburger';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { SlLogout, SlLogin } from 'react-icons/sl';
import { IconContext } from 'react-icons';
import { MdAppRegistration } from 'react-icons/md';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { FaHome } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';

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
  StyledUsername,
} from './SharedLayout.styled';

const SharedLayout = () => {
  const dispatch = useDispatch();
  // const { BASE_URL } = process.env;

  const { isLoggedIn, user, isVerified } = useAuth();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  const onLogOut = () => {
    dispatch(logOut()).then(data => {
      try {
        if (!data?.error?.message) {
          window.location.href = `https://volodya1989.github.io/learn-lingo/#/login`;
          // window.location.href = `http://localhost:3000/learn-lingo/#/login`;
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
            {isLoggedIn ? (
              <HideMobile>
                <StyledItem>
                  <StyledLink to="/favorites" end>
                    Favorites
                  </StyledLink>
                </StyledItem>
              </HideMobile>
            ) : (
              ''
            )}
          </StyledList>
          <div onClick={toggleHamburger}>
            <MobileNav hamburgeropen={hamburgerOpen.toString()}>
              {isLoggedIn ? <LoggedInName>{user.username}</LoggedInName> : ''}
              <StyledMobileItem>
                <IconContext.Provider
                  value={{ color: '#f4c550', size: '15px' }}
                >
                  <FaHome />
                </IconContext.Provider>
                <StyledLink to="/">Home</StyledLink>
              </StyledMobileItem>
              <StyledMobileItem>
                <IconContext.Provider
                  value={{ color: '#f4c550', size: '20px' }}
                >
                  <LiaChalkboardTeacherSolid />
                </IconContext.Provider>
                <StyledLink to="/teachers">Teachers</StyledLink>
              </StyledMobileItem>
              {isLoggedIn ? (
                <>
                  <StyledMobileItem>
                    <IconContext.Provider
                      value={{ color: '#f4c550', size: '20px' }}
                    >
                      <MdFavorite />
                    </IconContext.Provider>
                    <StyledLink to="/favorites">Favorites</StyledLink>
                  </StyledMobileItem>
                  <StyledMobileItem>
                    <IconContext.Provider
                      value={{ color: '#f4c550', size: '20px' }}
                    >
                      <SlLogout />
                    </IconContext.Provider>
                    <StyledLink to="/login" onClick={() => onLogOut()}>
                      Log Out
                    </StyledLink>
                  </StyledMobileItem>
                </>
              ) : (
                <>
                  <StyledMobileItem>
                    <IconContext.Provider
                      value={{ color: '#f4c550', size: '20px' }}
                    >
                      <SlLogin />
                    </IconContext.Provider>
                    <StyledLink to="/login">Log In</StyledLink>
                  </StyledMobileItem>
                  <StyledMobileItem>
                    <IconContext.Provider
                      value={{ color: '#f4c550', size: '20px' }}
                    >
                      <MdAppRegistration />
                    </IconContext.Provider>
                    <StyledLink to="/registration">Registration</StyledLink>
                  </StyledMobileItem>
                </>
              )}
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
                  <IconContext.Provider
                    value={{ color: '#f4c550', size: '25px' }}
                  >
                    <SlLogout />
                  </IconContext.Provider>
                  <StyledLogin>Log Out </StyledLogin>
                </StyledLink>
              </StyledItem>
              <StyledItem>
                <StyledLink>
                  <StyledUsername>
                    {' '}
                    {user.username[0].toUpperCase() + user.username.slice(1)}
                  </StyledUsername>
                </StyledLink>
              </StyledItem>
            </StyledList>
          </BlockRight>
        ) : (
          <BlockRight>
            <StyledList>
              <StyledItem>
                <StyledLink to="/login">
                  <IconContext.Provider
                    value={{ color: '#f4c550', size: '25px' }}
                  >
                    <SlLogin />
                  </IconContext.Provider>
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
