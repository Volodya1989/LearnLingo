import { useForm } from 'react-hook-form';
import { useCallback, useEffect, useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
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
  StyledImg,
  DescrText,
  Name,
  NameTitle,
  NameWrapper,
  RadioWrapper,
  RadioTitle,
} from './TrialLesson.styled';
 
export const TrialLesson = ({
  details: { surname, name, avatar_url },
  onClose,
}) => {
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
  const [active, setActive] = useState(false);
  const radioOptions = [
    { label: 'Career and business', value: 'Career and business' },
    { label: 'Lesson for kids', value: 'Lesson for kids' },
    { label: 'Living abroad', value: 'Living abroad' },
    { label: 'Exams and courswork', value: 'Exams and courswork' },
    { label: 'Culture, travel and hobby', value: 'Culture, travel and hobby' },
  ];

  //setting query state on change and passing it as props to search component
  const onQueryChange = useCallback(
    e => {
      console.log(e.currentTarget.name);
      if (e.currentTarget.value === ' ') {
        return;
      }
      if (e.currentTarget.name === 'email') {
        setEmail(e.currentTarget.value.trim());
      }
      if (e.currentTarget.name === 'lastName') {
        setFullName(e.currentTarget.value.trim());
      }
      if (e.currentTarget.name === 'phone') {
        setPhone(e.currentTarget.value.trim());
      }
    },
    [setEmail, setFullName, setPhone]
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
    setFullName('');
    setPhone('');
    setEmail('');
    setBtnName('Submitting');

    setTimeout(() => {
      setActive(false);
      setBtnName('Book');
      onClose();
      toastSuccess(
        `You've successfully booked a lesson. We will contact you shortly!`
      );
    }, 1000);
  };

  useEffect(() => {
    console.log(isSubmitSuccessful);

    if (isSubmitSuccessful) {
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

        <form onSubmit={handleSubmit(data => onSubmitForm(data))}>
          <RadioTitle>
            What is your main reason for learning English?
          </RadioTitle>
          <RadioWrapper>
            <FormControl variant="standard">
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="radio"
                defaultValue={radioOptions[0].value}
              >
                {radioOptions?.map(({ label: optionLabel, value }, index) => {
                  return (
                    <div key={index}>
                      <FormControlLabel
                        sx={{
                          color: '#141414',
                        }}
                        value={value}
                        label={optionLabel}
                        defaultChecked={index === 1 ? true : false}
                        control={
                          <Radio
                            {...register('reasonForLearning', {
                              required: true,
                              value: value,
                            })}
                            sx={{
                              color: 'lightgray',

                              '&.Mui-checked': {
                                color: '#F4C550',
                              },
                              fontSize: '16px',
                              lineHeight: 'calc(22/16)',
                            }}
                          />
                        }
                      />
                    </div>
                  );
                })}
              </RadioGroup>
            </FormControl>
          </RadioWrapper>
          {/* {errors.radio && <ErrorMessage>Email is required.</ErrorMessage>} */}
          {errors.lastName && (
            <ErrorMessage>Last Name is required.</ErrorMessage>
          )}
          {errors.phone && (
            <ErrorMessage>Phone number is required.</ErrorMessage>
          )}

          <Wrapper>
            <Field
              {...register('lastName', {
                required: true,
                value: fullName,
                // maxLength: 5,
              })}
              onChange={onQueryChange}
              name="lastName"
              value={fullName}
              autoComplete="off"
              type={'text'}
            />
            <Label htmlFor={1}>{'Last Name'}</Label>
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
          <MainButton disabled={active} type="submit" value={BtnName} />
        </form>
      </Description>
    </>
  );
};
export default TrialLesson;
