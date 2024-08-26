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
    <div>
      <li>
        {name} {surname}
      </li>
      <li>
        <img src={avatar_url} width={120} height={120} alt={name} />
      </li>
      <li>Speaks: {languages.map(el => el).join(', ')}</li>
      <li>Experience: {experience}</li>
      <li>Lesson Info:{lesson_info}</li>
      <li>
        Conditions:
        {conditions
          .map(el => el)
          .join('')
          .replace('.', '. ')}
      </li>
      <li>lessons Done: {lessons_done}</li>
      <li>Level:{levels}</li>

      <li>Price:{price_per_hour}</li>
      <li>Rating:{rating}</li>
      <li>Reviews:Need to create LIST OF COMMENTS</li>
      <p>=======================</p>
    </div>
  );
};
export default Card;
