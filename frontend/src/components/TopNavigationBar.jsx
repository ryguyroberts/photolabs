import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ( {state, setPhotosTopic} ) => {
  return (
    <div className="top-nav-bar">
      <span onClick={() => {setPhotosTopic(null)}} className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList state={state} setPhotosTopic={setPhotosTopic}/>
      <FavBadge isFavPhotoExist={state.likedCount > 0} />
    </div>
  )
}

export default TopNavigation;