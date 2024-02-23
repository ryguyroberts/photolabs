import React, { useReducer, useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from './mocks/photos'
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const [state, setLikeHandler, toggleModal] = useApplicationData();

  return (
    <div className="App">
      <HomeRoute setLikeHandler={setLikeHandler} state={state} photos={photos} topics={topics} toggleModal={toggleModal}/>
      {state.isModalOpen && <PhotoDetailsModal toggleModal={toggleModal} photos={photos} state={state} setLikeHandler={setLikeHandler}/>}
    </div>
  );
};

export default App;
