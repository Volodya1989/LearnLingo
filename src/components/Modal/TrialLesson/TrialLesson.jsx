import { useForm } from 'react-hook-form';
import { useCallback, useEffect, useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';

import {
  Description,
  Heading,
  Label,
  Field,
  Wrapper,
  ErrorMessage,
  MainButton,
  StyledImg,
  DescrText,
  Name,
  NameTitle,
  NameWrapper,
  RadioWrapper,
  RadioDescr,
  Radio,
  RadioTitle,
} from './TrialLesson.styled';
export const TrialLesson = ({ details: { surname, name, avatar_url } }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState: { isSubmitSuccessful },
  } = useForm();
  const [fullName, setFullName] = useLocalStorage('fullName' || '');
  const [email, setEmail] = useLocalStorage('email' || '');
  const [phone, setPhone] = useLocalStorage('phone' || '');
  const [BtnName, setBtnName] = useState('Book');

  //setting query state on change and passing it as props to search component
  const onQueryChange = useCallback(
    e => {
      console.log(e.currentTarget.name);
      if (e.currentTarget.value === ' ') {
        return;
      }
      if (e.currentTarget.name === 'email') {
        setEmail(e.currentTarget.value);
      }
      if (e.currentTarget.name === 'fullName') {
        setFullName(e.currentTarget.value);
      }
      if (e.currentTarget.name === 'phone') {
        setPhone(e.currentTarget.value);
      }
    },
    [setEmail, setFullName, setPhone]
  );
  const onClick = data => {
    setFullName('');
    setPhone('');
    setEmail('');
    console.log(data);
    setBtnName('Submitting');
    setTimeout(() => {
      setBtnName('Book');
    }, 1000);
  };

  const radioOptions = [
    { label: 'Career and business', value: 'Career and business' },
    { label: 'Lesson for kids', value: 'Lesson for kids' },
    { label: 'Living abroad', value: 'Living abroad' },
    { label: 'Exams and courswork', value: 'Exams and courswork' },
    { label: 'Culture, travel and hobby', value: 'Culture, travel and hobby' },
  ];

  useEffect(() => {
    console.log(isSubmitSuccessful);

    if (isSubmitSuccessful) {
      console.log('deleting');
      setFullName('');
      setPhone('');
      setEmail('');
    }
  }, [setEmail, setFullName, setPhone, isSubmitSuccessful]);
  return (
    <>
      <Description>
        <Heading>{`Book Trial Lesson `}</Heading>
        <DescrText>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </DescrText>
        <NameWrapper>
          <div>
            {' '}
            <StyledImg src={avatar_url} alt="Face" />
          </div>
          <NameTitle>
            Your Teacher <br />
            <Name>
              {name} {surname}
            </Name>
          </NameTitle>
        </NameWrapper>

        <form onSubmit={handleSubmit(data => onClick(data))}>
          <RadioTitle>
            What is your main reason for learning English?
          </RadioTitle>
          {radioOptions?.map(({ label: optionLabel, value }, index) => {
            return (
              <RadioWrapper key={index}>
                <label htmlFor={optionLabel}>
                  <Radio
                    {...register('radioButton', {
                      required: true,
                      value: value,
                    })}
                    defaultChecked={index !== 0 ? true : false}
                    type="radio"
                    value={value}
                    id={optionLabel}
                  />
                </label>
                <RadioDescr>{optionLabel}</RadioDescr>
              </RadioWrapper>
            );
          })}

          {errors.email && <ErrorMessage>Email is required.</ErrorMessage>}
          {errors.fullName && (
            <ErrorMessage>Full Name is required.</ErrorMessage>
          )}
          {errors.phone && (
            <ErrorMessage>Phone number is required.</ErrorMessage>
          )}

          <Wrapper>
            <Field
              {...register('fullName', {
                required: true,
                value: fullName,
                maxLength: 5,
              })}
              onChange={onQueryChange}
              name="fullName"
              value={fullName}
              autoComplete="off"
              type={'text'}
            />
            <Label htmlFor={1}>{'Full Name'}</Label>
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
              {...register('phone', { required: true, value: phone })}
              onChange={onQueryChange}
              name="phone"
              value={phone}
              autoComplete="off"
              type={'text'}
            />
            <Label htmlFor={1}>{'Phone'}</Label>
          </Wrapper>
          <MainButton type="submit" value={BtnName} />
        </form>
      </Description>
    </>
  );
};
export default TrialLesson;
