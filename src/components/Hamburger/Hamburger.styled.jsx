import styled from 'styled-components';
export const Container = styled.div`
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 10;
  //   color: black;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const BurgerItem = styled.div`
  width: 2em;
  height: 0.25em;
  border-radius: 10px;
  background-color: black;
  transform-origin: 1px;
  transition: all 0.3s linear;
`;
export const BurgerItem1 = styled(BurgerItem)`
  transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
`;

export const BurgerItem2 = styled(BurgerItem)`
  transform: ${({ isOpen }) => (isOpen ? 'translateX(100%)' : 'translateX(0)')};
  opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
`;
export const BurgerItem3 = styled(BurgerItem)`
  transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)}' : 'rotate(0)')};
`;
