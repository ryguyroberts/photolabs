import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

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
      {createTopics(sampleDataForTopicList)}
    </div>
  );
};

export default TopicList;
