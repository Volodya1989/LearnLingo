import styled from 'styled-components';

export const CardWrapper = styled.li`
  //   position: relative;
  //   box-shadow: var(--shade);
  border-radius: 20px;
  width: 1100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 20px;
  padding-top: 20px;
  //   margin-bottom: 35px;
  transition: transform 0.4s;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    transition: transform 0.4s;
    transform: scale(1.05);
  }
  //   @media screen and (min-width: 768px) {
  //     width: 200px;
  //     height: 362px;
  //     margin-left: 0;
  //     margin-right: 0;
  //   }
  //   @media screen and (min-width: 1150px) {
  //     width: 187px;
  //     height: 335px;
  //   }
`;

export const StyledImg = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  border: solid #fbe9ba 3px;
  padding: 10px;
`;
