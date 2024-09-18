import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const StyledContainer = styled.div`
  max-width: 1250px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
`;
export const DropdownContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  margin-left: 45px;
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
