import { useState, useEffect } from 'react';
import PostCard from './PostCard';

const IDS_URL = 'https://hacker-news.firebaseio.com/v0/jobstories.json';

export default function Board() {
  const [allPostIds, setAllPostIds] = useState([]);
  const [postings, setPostings] = useState([]);
  const [startingIndex, setStartingIndex] = useState(0);

  useEffect(() => {
    fetchPostIds();
  }, []);

  useEffect(() => {
    if (allPostIds.length > 0) {
      getPosts(9);
    }
  }, [allPostIds]);

  async function fetchPostIds() {
    try {
      const response = await fetch(IDS_URL);
      const ids = await response.json();
      setAllPostIds(ids);
    } catch (error) {
      throw new Error(error);
    }
  }

  async function getPosts(size) {
    const nextPostIds = allPostIds.slice(startingIndex, startingIndex + size);
    setStartingIndex(startingIndex + size);

    try {
      const newPosts = await Promise.all(
        nextPostIds.map(async id => {
          const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
          const response = await fetch(url);
          const data = await response.json();
          return data;
        })
      );

      setPostings([...postings, ...newPosts]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="general-container">
      <div className="posts-container">
        {postings.map(({ by, id, time, title, url }) => {
          return (
            <PostCard
              key={id}
              id={id}
              by={by}
              time={time}
              title={title}
              url={url}
            />
          );
        })}
      </div>
      <button onClick={() => getPosts(6)}>Load More Jobs</button>
    </div>
  );
}
