import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import Loader from 'components/Loader';
import {
  StyledLink,
  StyledHeader,
  StyledList,
  StyledItem,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <div>
      <StyledHeader>
        Header
        <StyledList>
          <StyledItem>
            <StyledLink to="/" end>
              Find A Car
            </StyledLink>
          </StyledItem>
        </StyledList>
      </StyledHeader>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
