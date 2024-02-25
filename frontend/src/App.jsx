import React, { useReducer, useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from './mocks/photos'
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const { state, updateToFavPhotoIds, onClosePhotoDetailsModal, setPhotoSelected } = useApplicationData();
  
  return (
    <div className="App">
      <HomeRoute 
        state={state} 
        updateToFavPhotoIds={updateToFavPhotoIds} 
        onClosePhotoDetailsModal={onClosePhotoDetailsModal} 
        setPhotoSelected={setPhotoSelected}
        topics={topics}
        photos={photos} />
      {state.isModalOpen && <PhotoDetailsModal
        state={state} 
        onClosePhotoDetailsModal={onClosePhotoDetailsModal} 
        updateToFavPhotoIds={updateToFavPhotoIds}  />}
    </div>
  );
};

export default App;
