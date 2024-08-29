import {
  CardWrapper,
  StyledImg,
  StyledIsActive,
  ImgWrapper,
  StyledFirstSection,
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
          <div>Lessons online</div>
          <div>lessons Done: {lessons_done}</div>
          <div>Rating:{rating}</div>
          <div>Price:{price_per_hour}</div>
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
