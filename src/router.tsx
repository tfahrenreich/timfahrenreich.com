import * as React from "react";

import {
    HashRouter as Router,
    Route,
} from "react-router-dom";

//  Layouts
import MainLayout from "./components/layouts/main";
// import SearchLayoutContainer from "./components/containers/search-layout-container";

//  Pages
import Home from "./components/home.component";
// import Home from "./components/home";
// import UserListContainer from "./components/containers/user-list-container";
// import UserProfileContainer from "./components/containers/user-profile-container";
// import WidgetListContainer from "./components/containers/widget-list-container";

export default (
    <Router>
        <MainLayout>
            <Route path="/users" component={Home}/>
        </MainLayout>
    </Router>
);
