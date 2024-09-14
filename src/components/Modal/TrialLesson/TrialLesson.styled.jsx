import styled from 'styled-components';

export const ModalDetailsStyled = styled.img`
  positon: relative;
`;

export const Description = styled.div`
  display: block;
  max-width: 600px;
  background-color: #f7f7f7;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
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
export const Heading = styled.h5`
  font-size: 25px;
  line-height: 1.18;
  font-weight: 500;
  margin-bottom: 25px;
  text-align: center;
`;
export const Label = styled.label`
  font-size: 22px;
  font-weight: 300;
  width: 200px;
  color: black;
  position: absolute;
  left: 0;
  top: 30%;
  transform: translateY(-50%);
  transition: all 0.2s ease;
  pointer-events: none;
`;

export const Wrapper = styled.section`
  flex-direction: 'row';
  alignitems: 'center';
  position: relative;
  margin-bottom: 40px;
`;

export const Field = styled.input`
  display: flex;
  border: 1px solid gray;
  font-size: 22px;
  background-color: transparent;
  padding: 10px 15px;
  border-bottom: 2px solid #d5f5f4;
  outline: none;
  width: 200px;
  color: black;
  @media screen and (min-width: 768px) {
    width: 350px;
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
    transform: translateY(-55px);
    scale: 0.9;
    color: #9ca5b5;
  }

  ${({ value = '' }) =>
    value &&
    `
    & ~ ${Label} {
      transform: translateY(-50px);

    }
  `}
`;
