import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import LikedPhotosModal from 'routes/LikedPhotosModal';


const App = () => {

  //Import useApplication hook and get functions
  const { state, updateToFavPhotoIds, onClosePhotoDetailsModal, setPhotoSelected, setPhotosTopic,  toggleLikedPhotosModal } = useApplicationData();
  
  return (
    <div className="App">
      <HomeRoute 
        state={state} 
        updateToFavPhotoIds={updateToFavPhotoIds} 
        onClosePhotoDetailsModal={onClosePhotoDetailsModal} 
        setPhotoSelected={setPhotoSelected} 
        setPhotosTopic={setPhotosTopic}
        toggleLikedPhotosModal={toggleLikedPhotosModal}/>
      {state.isModalOpen && <PhotoDetailsModal
        state={state} 
        onClosePhotoDetailsModal={onClosePhotoDetailsModal} 
        updateToFavPhotoIds={updateToFavPhotoIds}  />}
      {state.isLikedModalOpen && <LikedPhotosModal 
        toggleLikedPhotosModal={toggleLikedPhotosModal}
        state={state}/>} 
    </div>
  );
};

export default App;

