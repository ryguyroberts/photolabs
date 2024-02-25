import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({state, setPhotosTopic}) => {

  const createTopics = (topicArr) => {
    return topicArr.map((topic) => {
      return (
        <TopicListItem key={topic.id} topic={topic} setPhotosTopic={setPhotosTopic}/>
      );
    })
  }


  return (
    <div className="top-nav-bar__topic-list">
      {createTopics(state.topicData)}
    </div>
  );
};

export default TopicList;
