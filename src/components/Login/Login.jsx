import { useForm } from 'react-hook-form';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Description,
  Heading,
  Label,
  Field,
  Wrapper,
  ErrorMessage,
  MainButton,
  DescrText,
} from './Login.styled';
import { ToastContainer } from 'react-toastify';
import { StyledToastContainer } from 'components/Teachers/Teachers.styled';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState: { isSubmitSuccessful },
  } = useForm();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [BtnName, setBtnName] = useState('Log In');
  const [active, setActive] = useState(false);

  //setting query state on change and passing it as props to search component
  const onQueryChange = useCallback(
    e => {
      if (e.currentTarget.value === ' ') {
        return;
      }
      if (e.currentTarget.name === 'email') {
        setEmail(e.currentTarget.value.trim());
      }
      if (e.currentTarget.name === 'password') {
        setPassword(e.currentTarget.value.trim());
      }
    },
    [setEmail, setPassword]
  );

  //common method success notifications
  const toastSuccess = (message, _) => {
    toast.success(message, {
      className: 'toast-message',
    });
  };

  const onSubmitForm = data => {
    console.log(data);
    setActive(true);
    setPassword('');
    setEmail('');
    setBtnName('Logging...');

    setTimeout(() => {
      setActive(false);
      setBtnName('In development ...');
      toastSuccess(`You are logging...`);
    }, 1000);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      setPassword('');
      setEmail('');
    }
  }, [setEmail, setPassword, isSubmitSuccessful]);
  return (
    <>
      <Description>
        <StyledToastContainer autoClose={2000} position="top-right">
          <ToastContainer />;
        </StyledToastContainer>
        <Heading>{`Log In`}</Heading>
        <DescrText>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </DescrText>

        <form onSubmit={handleSubmit(data => onSubmitForm(data))}>
          {errors.password && (
            <ErrorMessage>Password is required.</ErrorMessage>
          )}
          {errors.phone && <ErrorMessage>Email is required.</ErrorMessage>}
          <Wrapper>
            <Field
              {...register('email', { required: true, value: email })}
              onChange={onQueryChange}
              name="email"
              value={email}
              autoComplete="off"
              type={'text'}
            />
            <Label htmlFor={1}>{'Email'}</Label>
          </Wrapper>
          <Wrapper>
            <Field
              {...register('password', {
                required: true,
                value: password,
                // maxLength: 5,
              })}
              onChange={onQueryChange}
              name="password"
              value={password}
              autoComplete="off"
              type={'password'}
            />
            <Label htmlFor={1}>{'Password'}</Label>
          </Wrapper>

          <MainButton disabled={active} type="submit" value={BtnName} />
        </form>
      </Description>
    </>
  );
};
export default Login;
