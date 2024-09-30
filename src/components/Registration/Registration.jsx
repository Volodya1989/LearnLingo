import { useForm } from 'react-hook-form';
import { useCallback, useEffect, useState, useRef } from 'react';
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
  ContainerLoader,
} from './Registration.styled';
import { ToastContainer } from 'react-toastify';
import { StyledToastContainer } from 'components/Teachers/Teachers.styled';
import Loader from 'components/Loader';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { register as reg } from 'redux/auth/operations';
import useLocalStorage from 'hooks/useLocalStorage';

export const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loading } = useFetch();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [BtnName, setBtnName] = useState('Sign Up');
  const [active, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [isServerStartingUp, setIsServerStartingUp] = useLocalStorage(
    'isServerUp',
    true
  );
  const timeoutRef = useRef(null);

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
  const toastInfo = (message, _) => {
    toast.info(message, {
      className: 'toast-message',
    });
  };

  const onSubmitForm = data => {
    setIsSubmitSuccessful(true);
    if (data.password === '' && data.email === '') {
      toastError('Please provide details');
      return;
    } else {
      if (isServerStartingUp) {
        setIsServerStartingUp(false);
        timeoutRef.current = setTimeout(() => {
          toastInfo(
            `Please wait as it takes few more seconds for server to wake up.`
          );
          console.log('Server is starting up.');
        }, 10500);
      }

      setPassword('');
      setEmail('');
      setName('');
      setIsLoading(true);
      setActive(true);
    }

    dispatch(
      reg({
        username: data.name,
        email: data.email.toLowerCase(),
        password: data.password,
      })
    ).then(data => {
      try {
        clearTimeout(timeoutRef.current);
        setIsLoading(false);
        if (data?.error?.message) {
          const { payload: errorMessage } = data;
          setTimeout(() => {
            setActive(false);
          }, 2000);
          setActive(true);
          const emailInUseError = 'Email in use';
          const passwordError = 'PASSWORD should have a minimum length of 6';
          const emailError = `"email" with value "${data.meta.arg.email}" fails to match the required pattern: /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$/`;
          const usernameError =
            'E11000 duplicate key error collection: Lingo.users index: username_1 dup key';
          if (errorMessage === emailInUseError) {
            toastError('Please provide different email.');
          } else if (errorMessage === passwordError) {
            toastError(`${passwordError} characters.`);
          } else if (errorMessage === emailError) {
            toastError('Please provide valid Email.');
          } else if (errorMessage.includes(usernameError)) {
            toastError('Please provide unique Username.');
          } else {
            toastError(`Please try again as server error occured.`);
          }
        }
        if (!data?.error?.message) {
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
            // window.location.href = `http://localhost:3000/learn-lingo/#/login`;
          }, 5000);
        }
      } catch (error) {
        console.log('error', error);
      }
    });
    const username = data.name;
  };
  const togglePassword = () => {
    setIsVisible(!isVisible);
  };

  const handleLoading = useCallback(
    e => {
      if (!loading && !isSubmitSuccessful) {
        setTimeout(() => {
          setIsLoading(true);
        }, 1000);
      }
    },
    [loading, isSubmitSuccessful]
  );

  useEffect(() => {
    handleLoading();
  }, [handleLoading]);
  return (
    <>
      {!isLoading && !isSubmitSuccessful ? (
        <Loader />
      ) : (
        <Description>
          <ContainerLoader>
            {isLoading && isSubmitSuccessful && <Loader />}
          </ContainerLoader>
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

            <MainButton
              disabled={active}
              type="submit"
              value={
                isLoading && isSubmitSuccessful ? 'Submitting...' : BtnName
              }
            />
          </form>
        </Description>
      )}
    </>
  );
};
export default Registration;
