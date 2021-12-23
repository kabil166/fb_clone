import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './MessegeSender.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MoodIcon from '@mui/icons-material/Mood';
function MessegeSender() {

    const [input, setInput] = useState("");
    const [imageUrl, setImageurl] = useState("");
    
    const handleSubmit=e=>{
        e.preventDefault();
    }
    return (
        <div className='messegeSender'>
            <div className='messegeSender__top'>
                <Avatar/>
                <form>
                    <input
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    className='messegeSender__input'
                    placeholder={`What's on your mind?`}
                    />
                    <input placeholder='Image URL(Optional)' onChange={e=>setImageurl(e.target.value)} value={imageUrl}/>
                    <button type="submit" onClick={handleSubmit}>
                        Hidden Button
                    </button>
                </form>
            </div>
            <div className='messegeSender__bottom'>
                <div className='messegeSender__option'>
                    <VideocamIcon style={{color:"red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className='messegeSender__option'>
                    <PhotoLibraryIcon style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className='messegeSender__option'>
                    <MoodIcon style={{color:"orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>

            </div>
        </div>
    )
}

export default MessegeSender
