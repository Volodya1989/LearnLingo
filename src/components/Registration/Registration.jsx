import { useForm } from 'react-hook-form';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useFetch from 'use-http';
import {
  Description,
  Heading,
  Label,
  Field,
  Wrapper,
  ErrorMessage,
  MainButton,
  DescrText,
  ProtectedEye,
} from './Registration.styled';
import { ToastContainer } from 'react-toastify';
import { StyledToastContainer } from 'components/Teachers/Teachers.styled';
import Loader from 'components/Loader';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { register as reg } from 'redux/auth/operations';

export const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // formState: { isSubmitSuccessful },
  } = useForm();
  const { loading } = useFetch();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [BtnName, setBtnName] = useState('Sign Up');
  const [active, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

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
      if (e.currentTarget.name === 'name') {
        setName(e.currentTarget.value.trim());
      }
    },
    [setEmail, setPassword, setName]
  );

  //common method success notifications
  const toastSuccess = (message, _) => {
    toast.success(message, {
      className: 'toast-message',
    });
  };
  const toastError = (message, _) => {
    toast.error(message, {
      className: 'toast-message',
    });
  };

  const onSubmitForm = data => {
    dispatch(
      reg({
        username: data.name,
        email: data.email.toLowerCase(),
        password: data.password,
      })
    ).then(data => {
      try {
        if (data?.error?.message) {
          setTimeout(() => {
            setActive(false);
          }, 2000);
          setActive(true);
          toastError(
            `Provide valid email or password should have at least 6 characters`
          );
        }
        if (!data?.error?.message) {
          setPassword('');
          setEmail('');
          setName('');
          setBtnName('Signing up...');
          setActive(true);
          toastSuccess(
            `${username}, please check your email to verify your registration.`
          );
          setTimeout(() => {
            setBtnName('Sign up');
            setActive(false);
            window.location.href =
              'https://volodya1989.github.io/learn-lingo/#/login';
          }, 5000);
        }
      } catch (error) {
        console.log('error', error.message);
      }
    });
    const username = data.name;
  };
  const togglePassword = () => {
    setIsVisible(!isVisible);
  };

  const handleLoading = useCallback(
    e => {
      if (!loading) {
        setTimeout(() => {
          setIsLoading(true);
        }, 1000);
      }
    },
    [loading]
  );

  useEffect(() => {
    handleLoading();
  }, [handleLoading]);
  return (
    <>
      {!isLoading ? (
        <Loader />
      ) : (
        <Description>
          <StyledToastContainer autoClose={6000} position="top-right">
            <ToastContainer />;
          </StyledToastContainer>
          <Heading>{`Registration`}</Heading>
          <DescrText>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </DescrText>

          <form onSubmit={handleSubmit(data => onSubmitForm(data))}>
            {errors.password && (
              <ErrorMessage>Password is required.</ErrorMessage>
            )}
            {errors.email && <ErrorMessage>Email is required.</ErrorMessage>}
            {errors.name && <ErrorMessage>Name is required.</ErrorMessage>}

            <Wrapper>
              <Field
                {...register('name', { required: true, value: name })}
                onChange={onQueryChange}
                name="name"
                value={name}
                autoComplete="off"
                type={'text'}
              />
              <Label htmlFor={1}>{'Username'}</Label>
            </Wrapper>
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
                })}
                sx={{
                  position: 'relative',
                }}
                onChange={onQueryChange}
                name="password"
                value={password}
                autoComplete="off"
                type={isVisible ? 'text' : 'password'}
              />
              <ProtectedEye onClick={togglePassword}>
                {!isVisible ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </ProtectedEye>
              <Label htmlFor={1}>{'Password'}</Label>
            </Wrapper>

            <MainButton disabled={active} type="submit" value={BtnName} />
          </form>
        </Description>
      )}
    </>
  );
};
export default Registration;
