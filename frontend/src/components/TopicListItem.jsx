import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = ( {topic , setPhotosTopic} ) => {
  return (
    <div onClick={() => {setPhotosTopic(topic.id)}}className="topic-list__item">
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;

