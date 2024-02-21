import React from 'react';

const HomeRoute = ({state, setLikeHandler}) => {
  return (
    <div className="home-route">
      <TopNavigation />
      <PhotoList setLikeHandler={setLikeHandler} state={state}/>
    </div>
  );
};

export default HomeRoute;