import React from "react";
import { Avatar } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import MoodIcon from "@mui/icons-material/Mood";
import "./messageSender.scss"; 
// import"./1.css"
export default function MessageSender({image_user, name_user}) {
  return (
    <div className="messageSender">
    <div className="messageSender__top">
        <Avatar src={image_user} />
        <form>
            <input 
                className="messageSender__input"
                placeholder= {`${name_user} bạn đang nghĩ gì thế?`} />
        </form>
    </div>
    <div className="messageSender__bottom">
        <div className="messageSender__option">
            <ImageIcon style={{ color: "violet" }} />
            <h3>Ảnh/Video</h3>
        </div>
        <div className="messageSender__option">
            <GroupAddIcon style={{ color: "green" }} />
            <h3>Gắn thẻ bạn bè</h3>
        </div>
        <div className="messageSender__option">
            <MoodIcon style={{ color: "yellow" }} />
            <h3>Cảm xúc/Hoạt động</h3>
        </div>



    </div>

</div>
  );
}
