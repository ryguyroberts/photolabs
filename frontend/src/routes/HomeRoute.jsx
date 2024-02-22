import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({state, setLikeHandler, photos, topics, toggleModal}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} state={state}/>
      <PhotoList setLikeHandler={setLikeHandler} state={state} photos={photos} toggleModal={toggleModal}/>
    </div>
  );
};

export default HomeRoute;

