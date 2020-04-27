import React from 'react';
import Home from './Home';
import Speakers from './Speakers';

export const AppContext = React.createContext();

const values = {
  showSpeakers: true,
  showSignUp: false,
};

const pageToShow = (pageName) => {
  if (pageName === 'Home') return <Home />;
  if (pageName === 'Speakers') return <Speakers />;
  return <div>Not Found</div>;
};

const App = ({ pageName }) => {
  return (
    <AppContext.Provider value={values}>
      <div>{pageToShow(pageName)}</div>
    </AppContext.Provider>
  );
};

export default App;
