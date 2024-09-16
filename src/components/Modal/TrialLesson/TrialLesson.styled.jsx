import styled from 'styled-components';

export const ModalDetailsStyled = styled.img`
  positon: relative;
`;

export const Description = styled.div`
  display: block;
  max-width: 500px;
  background-color: #f7f7f7;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding: 30px 60px;
  border-radius: 30px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 1.07;
    width: 600px;
  }
  @media screen and (min-width: 1100px) {
    font-size: 30px;
    line-height: 1.06;
  }
`;

export const Text = styled.p`
  font-size: var(--subheadingFonSize);
  line-height: 1.18;
  margin-top: 10px;
  margin-bottom: 25px;
`;
export const Heading = styled.h3`
  font-size: 40px;
  line-height: calc(48 / 40);
  font-weight: 500;
  margin-bottom: 25px;
  text-align: left;
  letter-spacing: -0.02em;
`;
export const DescrText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: calc(22 / 16);
  text-align: left;
`;
export const Label = styled.label`
  font-size: 18px;
  font-weight: 300;
  width: 200px;
  color: #9ca5b5;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.2s ease;
  pointer-events: none;
  padding-left: 15px;
`;

export const Wrapper = styled.section`
  flex-direction: 'row';
  alignitems: 'center';
  position: relative;
  margin-top: 30px;
`;

export const StyledImg = styled.img`
  border-radius: 50%;
  width: 44px;
  height: 44px;
`;

export const Field = styled.input`
  display: flex;
  border: 0;
  font-size: 22px;
  background-color: transparent;
  padding-top: 10px;
  border-bottom: 1px solid #f4c550;

  outline: none;
  width: 200px;
  color: black;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
  // @media screen and (min-width: 1100px) {
  //   width: 450px;
  // }

  ${({ disabled }) =>
    (disabled || '') &&
    `
    pointer-events: none;
    
  `}

  &:focus {
    border-color: #6118de;
  }

  &:focus ~ ${Label} {
    transform: translateY(-40px);
    // scale: 0.9;
    color: #9ca5b5;
  }

  ${({ value = '' }) =>
    value &&
    `
    & ~ ${Label} {
      transform: translateY(-40px);

    }
  `}
`;
export const ErrorMessage = styled.p`
  font-size: 20px;
  line-height: calc(18 / 12);
  color: red;
`;

export const MainButton = styled.input`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: Hug (60px) px;
  padding: 16px 48px 16px 48px;
  gap: 0px;
  display: flex;
  justify-content: center;
  margin-top: 25px;
  border-radius: 12px;
  opacity: 0px;
  font-weight: 700;
  background: #f4c550;
  border: none;
  font-size: 18px;
  line-height: calc(28 / 18);
  cursor: pointer;
  &:hover {
    transition: opacity 0.4s;
    opacity: 0.8;
    transition-timing-function: ease;
  }
`;

export const NameTitle = styled.div`
  color: #8a8a89;
  font-size: 12px;
  line-height: calc(16 / 12);
`;
export const Name = styled.span`
  display: block;
  font-size: 16px;
  line-height: calc(24 / 16);
  color: black;
`;
export const NameWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
