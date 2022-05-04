import React from 'react'
import { Avatar } from '@mui/material'
import"./SidebarRow.scss"
export default function SidebarRow({ src, Icon, title,image}) {
  return (
    <div className="sidebarRow">
    {src && <Avatar src={src} className="avatar_sidebarRow"/>}
    {Icon && <Icon className="icon_sidebarRow" />}
    {image && <img src={image} className="image_sidebarRow"/>}
    <h4 className='title_sidebarRow'> {title} </h4>
</div>
  )
}
