import React from 'react'
import { Avatar } from '@mui/material'
import './story.scss'
export default function Story({avatar_story,image_story,name_story}) {
  return (
    <div style={{ backgroundImage: `url(${image_story})` }} className="story">
        <Avatar src={avatar_story} className='avatar_story'/>
        <h4 className='title_story'>{name_story}</h4>
    </div> 
  
  )
}
