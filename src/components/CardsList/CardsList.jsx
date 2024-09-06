import Card from 'components/Card';
import { List, Title, NoTeachers } from 'components/CardsList/CardsList.styled';
import { v4 as uuidv4 } from 'uuid';
const CardsList = ({ teachers }) => {
  console.log(teachers.length);
  return (
    <div>
      <Title>List of Teachers</Title>
      <List
        style={{
          display: `${!teachers.length ? `flex` : ''}`,
          justifyContent: `${!teachers.length ? `center` : ''}`,
        }}
      >
        {teachers.length !== 0 ? (
          teachers?.map(
            ({
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
                <Card
                  avatar_url={avatar_url}
                  conditions={conditions}
                  experience={experience}
                  languages={languages}
                  lesson_info={lesson_info}
                  lessons_done={lessons_done}
                  levels={levels}
                  name={name}
                  rating={rating}
                  price_per_hour={price_per_hour}
                  reviews={reviews}
                  surname={surname}
                  key={uuidv4()}
                />
              );
            }
          )
        ) : (
          <NoTeachers>Teachers Not Found</NoTeachers>
        )}
      </List>
    </div>
  );
};
export default CardsList;
