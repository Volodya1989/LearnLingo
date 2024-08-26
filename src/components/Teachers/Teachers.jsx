import { useEffect, useCallback, useState } from 'react';
import CardsList from 'components/CardsList';
import teachersAPI from '../../data/teachers.json';
import useLocalStorage from 'hooks/useLocalStorage';
import useFetch from 'use-http';

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
    // console.log('setTeachers', teachers);
    // console.log('isLoading', isLoading);
  }, [handleLoading]);

  return (
    <div>
      {!isLoading ? <p>Loading...</p> : <CardsList teachers={teachers} />}
    </div>
  );
};
export default Teachers;
