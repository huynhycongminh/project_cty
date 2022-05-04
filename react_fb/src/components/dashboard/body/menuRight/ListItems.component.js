import React from "react";
import Item from "./Item.component";
import RedeemIcon from "@mui/icons-material/Redeem";
import SearchIcon from "@mui/icons-material/Search";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ChatIcon from "@mui/icons-material/Chat";
import { useEffect, useState } from "react";
import baseDb from "../../../../data";

import "./listItems.scss";
export default function ListItems({src,title}) {
  const [friend, setFriend] = useState([]);
  useEffect(() => {
    baseDb
      .collection("Friend")
      .onSnapshot((snapshot) =>
      setFriend(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  });
  return (
    <div className="listItems">
      <div className="listItems_top">
        <div className="title_top">
          <h3>Lời nhắc</h3>
        </div>
        <div className="birthday">
          <RedeemIcon className="iconBirthday" />
          <h4>Linh le and 2 other have birthdays today</h4>
        </div>
      </div>
      <div className="listItems_bottom">
        <div className="search_bottom">
          <input placeholder="Người liên hệ" />
          <SearchIcon className="iconSearch" />
        </div>
        {friend.map((Friend) => (
            <Item
              key={Friend.id}
              src={Friend.data.image_friend}
              title={Friend.data.name_friend}
              Icon={FiberManualRecordIcon}
            />
          ))}
      </div>
    </div>
  );
}
