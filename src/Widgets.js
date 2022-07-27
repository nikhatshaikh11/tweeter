import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import { TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon'/>
        <input placeholder='Search Tweeter' type='text'></input>
      </div>

      <div className='widgets__widgetContainer'>
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={'1541413000909049856'} />

        <TwitterTimelineEmbed 
        sourceType='profile' 
        screenName='_ni_sha'
        options={ { height: 400 } }
        />

        <TwitterShareButton url={'https://twitter.com/_ni_sha'}
        options={ { text: '#reactjs is awesome', via: '_ni_sha' } } 
        />

      </div>
    </div>
  )
}

export default Widgets
