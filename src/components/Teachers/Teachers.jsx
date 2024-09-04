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
  // console.log(teachersAPI);
  const [teachers, setTeachers] = useLocalStorage('teachers', null);
  const { loading } = useFetch();
  const [isLoading, setIsLoading] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);

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
                  <DropdownItem>English</DropdownItem>
                  <DropdownItem>French</DropdownItem>
                  <DropdownItem>Ukrainian</DropdownItem>
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
