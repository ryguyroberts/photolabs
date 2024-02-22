import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "../mocks/topics";

const TopicList = () => {

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
