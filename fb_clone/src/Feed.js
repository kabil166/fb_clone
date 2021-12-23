import React from 'react'
import './feed.css'
import MessegeSender from './MessegeSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessegeSender/>
            <Post
            profilePic="https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg"
            image="https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg"
            username="Beautiful Women"
            message="WOw this works"
            />
            <Post/>
            <Post/>
        </div>
    )
}

export default Feed
