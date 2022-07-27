import React from 'react'
import './TweetBox.css'
import { Avatar, Button, Input } from '@mui/material'
import { useState } from 'react'
import { db } from './firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';


function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (event) => {
    event.preventDefault();

    const tweet = {
      displayName: 'Jack Dorsey',
      username: 'jack',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 'https://www.ycombinator.com/blog/content/images/wordpress/2016/11/jack-dorsey.jpg'
    }

    const colRef = collection(db, 'posts');

    //await bc addDoc is an asynchronous function
    addDoc(colRef, tweet);

    setTweetMessage('');
    setTweetImage('');
  }

  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src="https://www.ycombinator.com/blog/content/images/wordpress/2016/11/jack-dorsey.jpg"/> {/* dummy user profile pic */}
                <input 
                onChange={event => setTweetMessage(event.target.value)}
                value={tweetMessage}
                placeholder="What's happening!"
                type='text'>
                </input>
            </div>

            <input 
            onChange={event => setTweetImage(event.target.value)}
            value={tweetImage}
            className='tweetBox__imageInput' 
            type="text" 
            placeholder="Enter an image URL">
            </input>

            <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox
