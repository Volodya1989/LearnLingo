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
        <p>Read more</p>

        <div>
          {' '}
          <StyledDescription>Lesson Info:</StyledDescription> {lesson_info}
        </div>

        <div>Level:{levels}</div>

        <div>Reviews:Need to create LIST OF COMMENTS</div>
        <p>=======================</p>
      </div>
    </CardWrapper>
  );
};
export default Card;
