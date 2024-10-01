import { Description, Heading, StyledLink } from './Blocked.style';

export const Blocked = () => {
  return (
    <>
      <Description>
        <Heading>
          Please {<StyledLink to="/registration">Register</StyledLink>} or{' '}
          {<StyledLink to="/login">Login</StyledLink>} to use this
          functionality.
        </Heading>
      </Description>
    </>
  );
};
export default Blocked;
