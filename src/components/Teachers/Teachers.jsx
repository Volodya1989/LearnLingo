import { useEffect, useCallback, useState } from 'react';
import CardsList from 'components/CardsList';
import teachersAPI from '../../data/teachers.json';
import useLocalStorage from 'hooks/useLocalStorage';
import useFetch from 'use-http';
import { StyledContainer } from './Teachers.styled';

const Teachers = () => {
  // console.log(teachersAPI);
  const [teachers, setTeachers] = useLocalStorage('teachers', null);
  const { loading } = useFetch();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = useCallback(
    e => {
      if (loading) {
        setIsLoading(false);
      }
      if (!teachers) {
        setTeachers(teachersAPI);
      }
      if (!loading) {
        setTimeout(() => {
          setIsLoading(true);
        }, 1000);
      }
    },
    [loading, setTeachers, teachers]
  );

  useEffect(() => {
    handleLoading();
  }, [handleLoading]);

  return (
    <StyledContainer>
      {!isLoading ? <p>Loading...</p> : <CardsList teachers={teachers} />}
    </StyledContainer>
  );
};
export default Teachers;
