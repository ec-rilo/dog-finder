import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import StyledNavBar from './NavBar/NavBar';
import StyledHomePage from './Pages/HomePage/HomePage';
import StyledFooter from './Footer/Footer';
import StyledDogPage from './Pages/DogPage/DogPage';
import StyledMyDogsPage from './Pages/MyDogsPage/MyDogs';

function App({ className }) {
  return (
    <BrowserRouter>
      <div className={className}>
        <StyledNavBar />
        <Routes>
          <Route path="/" element={<StyledHomePage />} />
          <Route path="breeds" element={<StyledDogPage />}>
            <Route path=":dogName" element={<StyledDogPage />} />
          </Route>
          <Route path="/my_dogs" element={<StyledMyDogsPage />} />
          <Route
            path="*"
            element={(
              <div style={{ padding: '1rem' }}>
                <p>Theres nothing here!</p>
              </div>
            )}
          />
        </Routes>
        <StyledFooter />
      </div>
    </BrowserRouter>

  );
}

const StyledApp = styled(App)`
  width: 100%;
  margin: auto;
`;

App.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StyledApp;
