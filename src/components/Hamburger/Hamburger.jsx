import {
  Container,
  BurgerItem1,
  BurgerItem2,
  BurgerItem3,
} from './Hamburger.styled';
const Hamburger = ({ isOpen }) => {
  return (
    <Container>
      <BurgerItem1 isOpen={isOpen} />
      <BurgerItem2 isOpen={isOpen} />
      <BurgerItem3 isOpen={isOpen} />
    </Container>
  );
};
export default Hamburger;
