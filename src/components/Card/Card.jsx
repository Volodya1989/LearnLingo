import {
  CardWrapper,
  StyledImg,
  StyledIsActive,
  ImgWrapper,
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
        <div>
          {name} {surname}
        </div>
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
        <div>lessons Done: {lessons_done}</div>
        <div>Level:{levels}</div>

        <div>Price:{price_per_hour}</div>
        <div>Rating:{rating}</div>
        <div>Reviews:Need to create LIST OF COMMENTS</div>
        <p>=======================</p>
      </div>
    </CardWrapper>
  );
};
export default Card;
