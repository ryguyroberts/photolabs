import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({state, setLikeHandler}) => {
  return (
    <div className="home-route">
      <TopNavigation />
      <PhotoList setLikeHandler={setLikeHandler} state={state}/>
    </div>
  );
};

export default HomeRoute;
