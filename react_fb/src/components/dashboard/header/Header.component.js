import React from "react";
import "./header.scss";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
export default function Header({ name_user, image_user }) {
  return (
    <div className="headers">
      <div className="header_left">
        <img
          className="logo"
          src="https://pnggrid.com/wp-content/uploads/2021/05/Facebook-logo-2021-1024x1024.png"
          alt="logo"
        />
        <div className="search">
          <SearchIcon />
          <input
            placeholder="Tìm kiếm trên Facebook"
            className="search_input"
          />
        </div>
      </div>
      <div className="header_right">
        <div className="header_info">
          <Avatar src={image_user} className="avatar_user" />
          <h4 className="name_user">{name_user}</h4>
        </div>
        <div className="link_homePage">
          <a href="/" className="homePage">
            Trang chủ
          </a>
        </div>
        <div className="createNew">
          <a href="/" className="create">
            Tạo
          </a>
          <ArrowDropDownIcon />
        </div>
        <IconButton className="menuIcon">
          <MenuIcon className="menu" />
        </IconButton>
        <IconButton>
          <PeopleAltIcon className="people_header" />
        </IconButton>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
      </div>
    </div>
  );
}
