import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics}) => {

  const createTopics = (topicArr) => {
    return topicArr.map((topic) => {
      return (
        <TopicListItem key={topic.id} topic={topic}/>
      );
    })
  }


  return (
    <div className="top-nav-bar__topic-list">
      {createTopics(topics)}
    </div>
  );
};

export default TopicList;
