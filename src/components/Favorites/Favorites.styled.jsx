import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
  overflow-y: ${({ isShowModal }) => (isShowModal ? 'hidden' : 'scroll')};
}
`;

export const StyledContainer = styled.div`
  max-width: 1250px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
`;
export const DropdownContainer = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
    padding-left: 45px;
  }
  @media screen and (min-width: 1150px) {
    width: 100%;
  }
`;

export const StyledToastContainer = styled(ToastContainer).attrs({
  className: '.toast-message',
  toastClassName: 'toast',
  bodyClassName: 'body',
  progressClassName: 'progress',
})`
  .toast-message {
    width: 100%;
    background-color: #f4c550;
    color: #black;
    font-size: 20px;
  }
`;
