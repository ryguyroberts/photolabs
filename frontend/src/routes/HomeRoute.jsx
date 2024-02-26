import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({state, updateToFavPhotoIds, onClosePhotoDetailsModal, setPhotoSelected, setPhotosTopic,  toggleLikedPhotosModal}) => {
  return (
    <div className="home-route">
      <TopNavigation
        state={state} 
        setPhotosTopic={setPhotosTopic}
        toggleLikedPhotosModal={toggleLikedPhotosModal}
        updateToFavPhotoIds={updateToFavPhotoIds}/>
      <PhotoList 
        updateToFavPhotoIds={updateToFavPhotoIds} 
        state={state} 
        onClosePhotoDetailsModal={onClosePhotoDetailsModal} 
        setPhotoSelected={setPhotoSelected}
        photos={state.photoData}/>
    </div>
  );
};

export default HomeRoute;

