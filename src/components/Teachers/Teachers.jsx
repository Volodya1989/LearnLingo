import { useEffect, useCallback, useState } from 'react';
import CardsList from 'components/CardsList';
import teachersAPI from '../../data/teachers.json';
import useLocalStorage from 'hooks/useLocalStorage';
import Button from 'components/Button';
import Dropdown from 'components/Dropdown';
import useFetch from 'use-http';
import Loader from 'components/Loader';
import { StyledContainer, DropdownContainer } from './Teachers.styled';

const Teachers = () => {
  const [teachers, setTeachers] = useLocalStorage('teachers', null);
  const [languages, setLanguages] = useLocalStorage('languages', null);
  const { loading } = useFetch();
  const [isLoading, setIsLoading] = useState(false);
  const [pageCounter, setPageCounter] = useState(() => 3);
  const [isLoadMore, setIsLoadMore] = useState(true);

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
  console.log(teachers?.[0]);
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
        return Number(teacher.price_per_hour) <= Number(selectedPrice);
      });
      filteredTeachers = filteredTeachers.sort(
        (a, b) => b.price_per_hour - a.price_per_hour
      );
    }
    const finalListFilteredTeachers = filteredTeachers.filter(
      (_, index) => index < pageCounter
    );
    setFilteredTeachers(finalListFilteredTeachers);
    if (finalListFilteredTeachers.length + 1 <= pageCounter) {
      setIsLoadMore(false);
    } else {
      setIsLoadMore(true);
    }
  }, [
    teachers,
    selectedLanguage,
    setFilteredTeachers,
    selectedLevel,
    selectedPrice,
    pageCounter,
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

  const onLoadMore = () => {
    console.log(filteredTeachers.length);
    console.log(filteredTeachers.length <= pageCounter);

    if (filteredTeachers.length <= pageCounter) {
      setIsLoadMore(false);
    }
    setPageCounter(prevCounter => prevCounter + 3);
    console.log('onLoadeMore', pageCounter);
  };
  const handleLoading = useCallback(
    e => {
      if (loading) {
        setIsLoading(false);
      }
      if (!teachers) {
        setTeachers(teachersAPI);
      }
      if (!languages) {
        setLanguages([
          ...new Set(teachersAPI?.map(({ languages }) => languages)?.flat()),
        ]);
      }
      if (!price) {
        setPrice([20, 30, 40, 50]);
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
        <Loader />
      ) : (
        <>
          <DropdownContainer>
            <Dropdown
              dropdownName={'Language'}
              selectedName={selectedLanguage}
              handleClick={handleLanguage}
              itemsMap={languages}
              width={'170px'}
            />
            <Dropdown
              dropdownName={'Level of knowledge'}
              selectedName={selectedLevel}
              handleClick={handleLevel}
              itemsMap={levelOfLanguage}
              width={'200px'}
            />
            <Dropdown
              dropdownName={'Price'}
              selectedName={selectedPrice}
              handleClick={handlePrice}
              itemsMap={price}
              width={'80px'}
            />
          </DropdownContainer>

          <CardsList teachers={filteredTeachers} />
          {isLoadMore && <Button onLoad={onLoadMore} />}
        </>
      )}
    </StyledContainer>
  );
};

export default Teachers;
