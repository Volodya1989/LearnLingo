import { useEffect, useCallback, useState, useRef } from 'react';
import CardsList from 'components/CardsList';
import teachersAPI from '../../data/teachers.json';
import useLocalStorage from 'hooks/useLocalStorage';
import { GoChevronDown } from 'react-icons/go';
import useOnClickOutside from 'hooks/useOnClickOutside';

import useFetch from 'use-http';
import {
  StyledContainer,
  Dropdown,
  DropdownBtn,
  DropdownList,
  DropdownItem,
  DropdownDescr,
} from './Teachers.styled';

const Teachers = () => {
  const [teachers, setTeachers] = useLocalStorage('teachers', null);
  const [languages, setLanguages] = useLocalStorage('languages', null);
  const { loading } = useFetch();
  const [isLoading, setIsLoading] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useLocalStorage('All', 'All');
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

  //saving ref valus for the soring options between renders
  const innerWrapperRef = useRef();
  const handleClick = item => {
    setSelectedLanguage(item);
    setIsDropdown(false);
  };

  //closing sorting options based on the click outside of the sorting box
  useOnClickOutside(
    innerWrapperRef,
    () => isDropdown && setTimeout(() => setIsDropdown(false), 201)
  );

  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
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
          <Dropdown>
            <DropdownDescr>Languages</DropdownDescr>
            <DropdownBtn onClick={() => toggleDropdown()}>
              <span>{selectedLanguage}</span>
              <GoChevronDown
                size={20}
                color={'black'}
                style={isDropdown ? { transform: 'rotate(180deg)' } : ''}
              />
            </DropdownBtn>{' '}
            {isDropdown ? (
              <div>
                <DropdownList ref={innerWrapperRef}>
                  {selectedLanguage !== 'All' ? (
                    <DropdownItem
                      style={{
                        color: `${
                          selectedLanguage === 'All' ? 'black' : '#8a8a89'
                        }`,
                      }}
                      onClick={() => handleClick('All')}
                    >
                      All
                    </DropdownItem>
                  ) : (
                    ''
                  )}

                  {languages?.map((item, index) => {
                    return (
                      <DropdownItem
                        props={(selectedLanguage, item)}
                        style={{
                          color: `${
                            selectedLanguage === item ? 'black' : '#8a8a89'
                          }`,
                        }}
                        onClick={() => handleClick(item)}
                        key={index}
                      >
                        {item}
                      </DropdownItem>
                    );
                  })}
                </DropdownList>
              </div>
            ) : (
              false
            )}
          </Dropdown>
          <CardsList teachers={filteredTeachers} />
        </>
      )}
    </StyledContainer>
  );
};

export default Teachers;
