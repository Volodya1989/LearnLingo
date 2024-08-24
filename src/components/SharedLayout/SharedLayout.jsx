import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import Loader from 'components/Loader';
import {
  StyledLink,
  StyledHeader,
  StyledList,
  StyledItem,
  Block,
  BlockRight,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <div>
      <StyledHeader>
        <Block>
          <StyledList>
            <StyledLink to="/" end>
              LearnLingo
            </StyledLink>
            <StyledItem>
              <StyledLink to="/" end>
                Home
              </StyledLink>
            </StyledItem>
            <StyledItem>
              <StyledLink to="/teachers" end>
                Teachers
              </StyledLink>
            </StyledItem>
          </StyledList>
        </Block>
        <BlockRight>
          <StyledList>
            <StyledItem>
              <StyledLink to="/login">Login</StyledLink>
            </StyledItem>
            <StyledItem>
              <StyledLink to="/registration">Registration</StyledLink>
            </StyledItem>
          </StyledList>
        </BlockRight>
      </StyledHeader>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
