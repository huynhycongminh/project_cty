import React from "react";
import SidebarRow from "./SidebarRow.component";
import ArticleIcon from "@mui/icons-material/Article";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FlagIcon from "@mui/icons-material/Flag";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import "./Sidebar.scss";
import Item from "../menuRight/Item.component";
import baseDb from "../../../../data";
import { useEffect, useState } from "react";
export default function Sidebar() {
  const [user, setUser] = useState([]);
  const [group, setGroup] = useState([]);

  useEffect(() => {
    baseDb
      .collection("User")
      .onSnapshot((snapshot) =>
        setUser(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  });
  useEffect(() => {
    baseDb
      .collection("Group")
      .onSnapshot((snapshot) =>
        setGroup(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  });
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        
           {user.map((User) => (
            <SidebarRow
              key={User.id}
              src={User.data.image_user}
              title={User.data.name_user}
            />
          ))}
          
        <SidebarRow Icon={ArticleIcon} title="Bảng tin" />
        <SidebarRow Icon={OndemandVideoIcon} title="Videos" className="" />
      </div>
      <div className="sidebar_middle">
        <h3 className="title_middle">Lối tắt</h3>
        {group.map((Group) => (
            <SidebarRow
              key={Group.id}
              src={Group.data.image_group}
              title={Group.data.name_group}
            />
          ))}

        <div className="see_more">
          <h3 className="more">Xem thêm </h3>
          <ArrowDropDownIcon className="arrow_icon_more" />
        </div>
      </div>
      <div className="sidebar_bottom">
        <h3 className="title_bottom">Khám Phá</h3>
        <SidebarRow Icon={FlagIcon} title="Trang" />
        <SidebarRow Icon={PeopleAltIcon} title="Nhóm" />
        <Item />
      </div>
    </div>
  );
}
