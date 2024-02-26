import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {

  //Import useApplication hook and get functions
  const { state, updateToFavPhotoIds, onClosePhotoDetailsModal, setPhotoSelected, setPhotosTopic } = useApplicationData();
  
  return (
    <div className="App">
      <HomeRoute 
        state={state} 
        updateToFavPhotoIds={updateToFavPhotoIds} 
        onClosePhotoDetailsModal={onClosePhotoDetailsModal} 
        setPhotoSelected={setPhotoSelected} 
        setPhotosTopic={setPhotosTopic}/>
      {state.isModalOpen && <PhotoDetailsModal
        state={state} 
        onClosePhotoDetailsModal={onClosePhotoDetailsModal} 
        updateToFavPhotoIds={updateToFavPhotoIds}  />}
    </div>
  );
};

export default App;
