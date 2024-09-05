import { useEffect, useCallback, useState } from 'react';
import CardsList from 'components/CardsList';
import teachersAPI from '../../data/teachers.json';
import useLocalStorage from 'hooks/useLocalStorage';

import Dropdown from 'components/Dropdown';
import useFetch from 'use-http';
import { StyledContainer } from './Teachers.styled';

const Teachers = () => {
  const [teachers, setTeachers] = useLocalStorage('teachers', null);
  const [languages, setLanguages] = useLocalStorage('languages', null);
  const { loading } = useFetch();
  const [isLoading, setIsLoading] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useLocalStorage(
    'All Languages',
    'All Languages'
  );
  const [levelOfLanguage, setLevelOfLanguage] = useLocalStorage(
    'levelOfLanguage',
    null
  );
  const [selectedLevel, setSelectedLevel] = useLocalStorage(
    'All Levels',
    'All Levels'
  );

  const [filteredTeachers, setFilteredTeachers] = useLocalStorage(
    'filteredTeachers',
    null
  );

  const handleFilteredTeachers = useCallback(() => {
    if (!teachers) return;
    const filteredListOfTeachers = teachers?.filter(teacher => {
      if (teacher.languages.includes(selectedLanguage)) {
        return teacher;
      }
      if (selectedLanguage === 'All') {
        return teacher;
      }
      return false;
    });
    setFilteredTeachers(filteredListOfTeachers);
  }, [teachers, selectedLanguage, setFilteredTeachers]);

  useEffect(() => {
    handleFilteredTeachers();
  }, [handleFilteredTeachers]);

  const handleLanguage = item => {
    setSelectedLanguage(item);
  };
  const handleLevel = item => {
    setSelectedLevel(item);
  };

  const handleLoading = useCallback(
    e => {
      if (loading) {
        setIsLoading(false);
      }
      if (!teachers) {
        setTeachers(teachersAPI);
        setFilteredTeachers(teachersAPI);
      }
      if (!languages) {
        setLanguages([
          ...new Set(teachersAPI?.map(({ languages }) => languages)?.flat()),
        ]);
      }
      if (!levelOfLanguage) {
        setLevelOfLanguage([
          ...new Set(teachersAPI?.map(({ levels }) => [...levels]).flat()),
        ]);
      }
      if (!loading) {
        setTimeout(() => {
          setIsLoading(true);
        }, 1000);
      }
    },
    [
      loading,
      setTeachers,
      teachers,
      languages,
      setLanguages,
      setFilteredTeachers,
      levelOfLanguage,
      setLevelOfLanguage,
    ]
  );

  useEffect(() => {
    handleLoading();
  }, [handleLoading]);

  useEffect(() => {
    handleLoading();
  }, [handleLoading]);

  return (
    <StyledContainer>
      {!isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Dropdown
            dropdownName={'Language'}
            selectedName={selectedLanguage}
            handleClick={handleLanguage}
            itemsMap={languages}
          />
          <Dropdown
            dropdownName={'Level of knowledge'}
            selectedName={selectedLevel}
            handleClick={handleLevel}
            itemsMap={levelOfLanguage}
          />

          <CardsList teachers={filteredTeachers} />
        </>
      )}
    </StyledContainer>
  );
};

export default Teachers;
