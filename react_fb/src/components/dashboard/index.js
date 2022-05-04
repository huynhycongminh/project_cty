import React from "react";

import {
  BrowserRouter as Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import Sidebar from "./body/menuLeft/Sidebar.component";
import Header from "./header/Header.component";
import Feed from "./body/middle/feed/Feed.component";
import ListItems from "./body/menuRight/ListItems.component";
import "../../containers/App.scss";
import "./index";
import { useEffect, useState } from "react";
import baseDb from "../../data/index";

export default function Dashboard() {
  const { path } = useRouteMatch();
  console.log(`path`, path);
  const [user, setUser] = useState([]);
  useEffect(() => {
    baseDb
      .collection("User")
      .onSnapshot((snapshot) =>
        setUser(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  });

  return (
    <>
      <Switch>
        <Route>
          {user.map((User) => (
            <Header
              key={User.id}
              image_user={User.data.image_user}
              name_user={User.data.name_user}
            />
          ))}
          <div className="app_body">
            <div className="row">
              <div className="col-3">
             <Sidebar/>
              </div>
              <div className="col-6">
                <Feed />
              </div>
              <div className="col-3">
                <ListItems />
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </>
  );
}
