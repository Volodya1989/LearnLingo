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
          <div>
            Lnguages
            <span>
              {name} {surname}
            </span>
          </div>
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
            <div>Rating:{rating}</div>
            <StyledPipe />
            <div>Price:{price_per_hour}$</div>
          </StyledFirstSection2>
        </StyledFirstSection>
        <div>Speaks: {languages.map(el => el).join(', ')}</div>
        <div>Experience: {experience}</div>

        <div>Lesson Info:{lesson_info}</div>
        <div>
          Conditions:
          {conditions
            .map(el => el)
            .join('')
            .replace('.', '. ')}
        </div>
        <div>Level:{levels}</div>

        <div>Reviews:Need to create LIST OF COMMENTS</div>
        <p>=======================</p>
      </div>
    </CardWrapper>
  );
};
export default Card;
