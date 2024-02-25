import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({state, updateToFavPhotoIds, onClosePhotoDetailsModal, setPhotoSelected}) => {
  return (
    <div className="home-route">
      <TopNavigation state={state}/>
      <PhotoList updateToFavPhotoIds={updateToFavPhotoIds} state={state} onClosePhotoDetailsModal={onClosePhotoDetailsModal} setPhotoSelected={setPhotoSelected}/>
    </div>
  );
};

export default HomeRoute;

