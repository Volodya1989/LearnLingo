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
    'selectedLanguage',
    'All'
  );
  const [selectedLevel, setSelectedLevel] = useLocalStorage(
    'selectedLevel',
    'All'
  );
  const [selectedPrice, setSelectedPrice] = useLocalStorage('selected', 'All');
  const [levelOfLanguage, setLevelOfLanguage] = useLocalStorage(
    'levelOfLanguage',
    null
  );
  const [price, setPrice] = useLocalStorage('price', null);

  const [filteredTeachers, setFilteredTeachers] = useLocalStorage(
    'filteredTeachers',
    null
  );
  console.log(teachers);

  const handleFilteredTeachers = useCallback(() => {
    if (!teachers) return;
    let filteredTeachers = teachers;
    if (selectedLanguage === 'All') {
      filteredTeachers = teachers;
    }
    if (selectedLevel === 'All') {
      filteredTeachers = teachers;
    }
    if (selectedLanguage !== 'All') {
      filteredTeachers = filteredTeachers?.filter(teacher => {
        return teacher.languages.includes(selectedLanguage);
      });
    }
    if (selectedLevel !== 'All') {
      filteredTeachers = filteredTeachers?.filter(teacher => {
        return teacher.levels.includes(selectedLevel);
      });
    }
    if (selectedPrice !== 'All') {
      filteredTeachers = filteredTeachers?.filter(teacher => {
        return Number(teacher.price_per_hour) === Number(selectedPrice);
      });
    }

    setFilteredTeachers(filteredTeachers);
  }, [
    teachers,
    selectedLanguage,
    setFilteredTeachers,
    selectedLevel,
    selectedPrice,
  ]);

  useEffect(() => {
    handleFilteredTeachers();
  }, [handleFilteredTeachers]);

  const handleLanguage = item => {
    setSelectedLanguage(item);
  };

  const handleLevel = item => {
    setSelectedLevel(item);
  };

  const handlePrice = item => {
    setSelectedPrice(item);
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
      if (!price) {
        setPrice([
          ...new Set(teachersAPI?.map(({ price_per_hour }) => price_per_hour)),
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
      price,
      setPrice,
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
          <Dropdown
            dropdownName={'Price'}
            selectedName={selectedPrice}
            handleClick={handlePrice}
            itemsMap={price}
          />

          <CardsList teachers={filteredTeachers} />
        </>
      )}
    </StyledContainer>
  );
};

export default Teachers;
