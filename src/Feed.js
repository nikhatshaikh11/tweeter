import React from 'react'
import './Feed.css' 
import TweetBox from './TweetBox'
import Post from './Post'
import {useState, useEffect} from 'react'
import { db } from './firebase';
import { doc, onSnapshot, collection, query } from 'firebase/firestore'
import FlipMove from 'react-flip-move';

function Feed() {
  const [posts_var, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'posts'));
  
    onSnapshot(q, (snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data())) //returns an array of all of th posts inside the database
      }
    );
  }, []);

  return (
    <div className='feed'>
      {/* Header */}
      <div className='feed__header'>
        <h2>Home</h2>
      </div>

      {/* Tweetbox */}
      <TweetBox />
      <FlipMove>
        {posts_var.map(post => (
        <Post
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
        ))}
      </FlipMove>

    </div>
  );
}

export default Feed
