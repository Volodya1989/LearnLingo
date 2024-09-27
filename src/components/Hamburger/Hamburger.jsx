import {
  Container,
  BurgerItem1,
  BurgerItem2,
  BurgerItem3,
} from './Hamburger.styled';
const Hamburger = ({ isopen }) => {
  return (
    <Container>
      <BurgerItem1 isopen={isopen.toString()} />
      <BurgerItem2 isopen={isopen.toString()} />
      <BurgerItem3 isopen={isopen.toString()} />
    </Container>
  );
};
export default Hamburger;
