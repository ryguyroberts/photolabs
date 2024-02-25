import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({state, updateToFavPhotoIds, photos, topics, onClosePhotoDetailsModal, setPhotoSelected}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} state={state}/>
      <PhotoList updateToFavPhotoIds={updateToFavPhotoIds} state={state} photos={photos} onClosePhotoDetailsModal={onClosePhotoDetailsModal} setPhotoSelected={setPhotoSelected}/>
    </div>
  );
};

export default HomeRoute;

