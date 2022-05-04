import React from 'react'
import { Avatar } from '@mui/material'
import"./items.scss"
export default function Item({src,title,Icon}) {
  return (
    <div className='row item'>
       <div className='col-2 left'>
       {src && <Avatar src={src} className="avatar_Item"/>}
       
       </div>
       <div className='col-8 middle'>
       <h4 className='title_Item'> {title} </h4>
       </div>
       <div className='col-2 right'>
       {Icon && <Icon className="icon_Item" />}
       </div>
  
    </div>
  )
}
