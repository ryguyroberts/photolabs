import React, { useReducer, useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from './mocks/photos'
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [state, updateToFavPhotoIds, onClosePhotoDetailsModal, setPhotoSelected] = useApplicationData();

  return (
    <div className="App">
      <HomeRoute updateToFavPhotoIds={updateToFavPhotoIds} state={state} photos={photos} topics={topics} onClosePhotoDetailsModal={onClosePhotoDetailsModal} setPhotoSelected={setPhotoSelected}/>
      {state.isModalOpen && <PhotoDetailsModal onClosePhotoDetailsModal={onClosePhotoDetailsModal} photos={photos} state={state} updateToFavPhotoIds={updateToFavPhotoIds}/>}
    </div>
  );
};

export default App;
