import { useState } from 'react';

import {
  CardWrapper,
  StyledImg,
  StyledIsActive,
  ImgWrapper,
  StyledFirstSection,
  StyledBook,
  StyledLessons,
  StyledFirstSection2,
  StyledPipe,
  StyledPrice,
  StyledSubTitle,
  StyledFirstName,
  StyledDescription,
  StyledDescMain,
  StyledReadMore,
  StyledLevel,
  StyledLevelEl,
  MainButton,
} from './Card.styled';
const Card = ({
  avatar_url,
  conditions,
  experience,
  languages,
  lesson_info,
  lessons_done,
  levels,
  name,
  rating,
  price_per_hour,
  reviews,
  surname,
}) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <CardWrapper>
      <ImgWrapper>
        <StyledIsActive></StyledIsActive>
        <StyledImg src={avatar_url} alt={name} />
      </ImgWrapper>
      <div>
        <StyledFirstSection>
          <StyledSubTitle>
            Languages <br />
            <StyledFirstName>
              {name} {surname}
            </StyledFirstName>
          </StyledSubTitle>
          <StyledFirstSection2>
            <StyledBook>
              {' '}
              <img
                src={require('../../SVG/book-open.svg').default}
                alt="Book"
              />
              <StyledLessons> Lessons online </StyledLessons>
            </StyledBook>
            <StyledPipe />
            <div>Lessons Done: {lessons_done}</div>
            <StyledPipe />
            <StyledBook>
              {' '}
              <img src={require('../../SVG/star.svg').default} alt="Star" />
              <span>Rating: {rating}</span>
            </StyledBook>
            <StyledPipe />
            <div>
              Price / 1 hour: <StyledPrice>{price_per_hour}$</StyledPrice>
            </div>
          </StyledFirstSection2>
        </StyledFirstSection>
        <StyledDescMain>
          {' '}
          <StyledDescription>Speaks:</StyledDescription>{' '}
          {languages.map(el => el).join(', ')}
        </StyledDescMain>
        <StyledDescMain>
          {' '}
          <StyledDescription>Experience:</StyledDescription> {experience}
        </StyledDescMain>
        <StyledDescMain>
          <StyledDescription>Conditions:</StyledDescription>
          {conditions
            .map(el => el)
            .join('')
            .replace('.', '. ')}
        </StyledDescMain>
        {isReadMore ? (
          ''
        ) : (
          <>
            <div>
              {' '}
              <StyledDescription>Lesson Info:</StyledDescription> {lesson_info}
            </div>

            <div>Reviews:Need to create LIST OF COMMENTS</div>
          </>
        )}
        <StyledReadMore onClick={toggleReadMore}>
          {isReadMore ? 'Read more' : 'Read less'}
        </StyledReadMore>
        <StyledLevel>
          {levels.map((el, i) => (
            <StyledLevelEl
              key={i}
              style={{ background: `${i === 0 ? '#f4c550' : '#fff'}` }}
            >
              {el}
            </StyledLevelEl>
          ))}
        </StyledLevel>

        {isReadMore ? false : <MainButton>Book trial lesson</MainButton>}
      </div>
    </CardWrapper>
  );
};
export default Card;
