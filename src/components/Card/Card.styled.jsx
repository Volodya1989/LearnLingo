import styled from 'styled-components';

export const CardWrapper = styled.li`
  //   position: relative;
  //   box-shadow: var(--shade);
  font-family: Roboto;

  border-radius: 20px;
  width: 1100px;
  display: flex;
  gap: 50px;
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

export const StyledIsActive = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: #38cd3e;
  border: 3px solid #fff;
  position: absolute;
  top: 25px;
  right: 25px;
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const StyledFirstSection = styled.div`
  display: flex;
  justify-content: start;
  gap: 150px;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  text-align: left;
  margin-bottom: 32px;
`;
export const StyledBook = styled.div`
  display: flex;
  gap: 8px;
`;

export const StyledLessons = styled.span`
  display: flex;
  align-items: center;
`;

export const StyledFirstSection2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StyledPipe = styled.div`
  border: solid #121417 0.5px;
  opacity: 0.3;
  height: 16px;
`;

export const StyledPrice = styled.span`
  color: #0bb81c;
`;

export const StyledSubTitle = styled.div`
  color: #8a8a89;
`;
export const StyledDescription = styled.span`
  color: #8a8a89;
`;
export const StyledFirstName = styled.span`
  display: block;
  padding-top: 5px;
  font-size: 24px;
  line-height: calc(24 / 24);
  color: black;
`;

export const StyledDescMain = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  margin-bottom: 8px;
`;

export const StyledReadMore = styled.div`
  text-decoration: underline;
  cursor: pointer;
`;
