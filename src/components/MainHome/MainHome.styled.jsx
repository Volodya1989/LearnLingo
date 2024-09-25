import styled from 'styled-components';

export const StyledMain = styled.div`
  display: block;
  margin-top: 75px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  @media screen and (min-width: 1150px) {
    flex-wrap: nowrap;
  }
`;

export const StyledDescription = styled.div`
  background: #f8f8f8;
  border-radius: 30px;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 50px;
  padding-bottom: 40px;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    width: 720px;
    padding-left: 60px;
    padding-right: 70px;
    padding-top: 70px;
    margin-bottom: 0;
  }
`;
export const StyledUnlocked = styled.h3`
  font-weight: 500;
  font-size: 25px;
  line-height: calc(32 / 25);
  width: 100%;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: calc(56 / 43);
  }
`;
export const StyledLanguage = styled.span`
  font-weight: 400;
  font-style: italic;
  background: #fbe9ba;
`;

export const StyledText = styled.p`
  width: 100%;
  font-size: 16px;
  line-height: calc(22 / 16);
  @media screen and (min-width: 768px) {
    width: 471px;
    font-size: 12px;
    line-height: calc(18 / 12);
  }
`;

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  line-height: calc(28 / 18);
  width: 100%;
  height: 60px;
  background: #f4c550;
  border-radius: 12px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 271px;
  }
`;

export const StyledList = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    width: auto;
    justify-content: center;
    align-items: center;
    gap: 20px;
    list-style: none;
    text-decoration: none;
    border: 1.5px dashed #f4c550;
    border-radius: 18px;
  }
`;
export const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 28px;
  line-height: calc(32 / 28);
  width: 271px;
  height: 116px;
`;
export const StyledSpan = styled.span`
  width: 100px;
  padding-left: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(18 / 14);
`;
export const StyledContainer = styled.div`
  max-width: 1250px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export const StyledImg = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 720px;
  }
  @media screen and (min-width: 1150px) {
    width: 600px;
  }
`;
