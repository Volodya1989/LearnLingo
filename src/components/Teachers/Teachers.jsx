import { useEffect, useCallback, useState } from 'react';
import CardsList from 'components/CardsList';
import teachersAPI from '../../data/teachers.json';
import useLocalStorage from 'hooks/useLocalStorage';
import useFetch from 'use-http';
import {
  StyledContainer,
  Dropdown,
  DropdownBtn,
  DropdownList,
  DropdownItem,
  DropdownDescr,
} from './Teachers.styled';
// import Search from 'components/Search';
const Teachers = () => {
  const [teachers, setTeachers] = useLocalStorage('teachers', null);
  const [languages, setLanguages] = useLocalStorage('languages', null);
  const { loading } = useFetch();
  const [isLoading, setIsLoading] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  console.log('List of languages', teachers);

  //  const handleChange =() => {
  //    setSelectedItem(item);
  //    onSelect && onSelect(item.id);
  //    isDropdown(false);
  //  };
  // useEffect(() => {
  //   if (selectedId && data) {
  //     const newSelectedItem = data.find(item => item.id === selectedId);
  //     newSelectedItem && setSelectedItem(newSelectedItem);
  //   } else {
  //     setSelectedItem(undefined);
  //   }
  // }, [selectedId, data]);

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
    [loading, setTeachers, teachers, languages, setLanguages]
  );

  useEffect(() => {
    handleLoading();
  }, [handleLoading]);

  return (
    <StyledContainer>
      {!isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* <Search onQueryChange={onQueryChange} query={query} /> */}

          <Dropdown>
            <DropdownDescr>Languages</DropdownDescr>
            <DropdownBtn onClick={() => toggleDropdown()}>
              <span>All</span>
              <div>
                <img
                  src={require('../../SVG/arrow-down.svg').default}
                  alt="Arrow-down"
                />
              </div>
            </DropdownBtn>{' '}
            {isDropdown ? (
              <div>
                <DropdownList>
                  {languages?.map((item, index) => {
                    return <DropdownItem key={index}>{item}</DropdownItem>;
                  })}
                </DropdownList>
              </div>
            ) : (
              false
            )}
          </Dropdown>
          <CardsList teachers={teachers} />
        </>
      )}
    </StyledContainer>
  );
};

export default Teachers;
