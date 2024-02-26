import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ( {state, setPhotosTopic, toggleLikedPhotosModal} ) => {
  return (
    <div className="top-nav-bar">
      <span onClick={() => {setPhotosTopic(null)}} className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList state={state} setPhotosTopic={setPhotosTopic}/>
      <span onClick={() => {toggleLikedPhotosModal()}}>
        <FavBadge isFavPhotoExist={state.likedCount > 0}/>
      </span>
    </div>
  )
}

export default TopNavigation;

