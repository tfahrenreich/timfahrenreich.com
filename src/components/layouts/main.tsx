import * as  React from "react";
import {Link} from "react-router-dom";

const MainLayout: React.StatelessComponent<any> = (props) => {
    return (
        <div className="app">
            <header className="primary-header"/>
            <aside className="primary-aside">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/widgets">Widgets</Link></li>
                </ul>
            </aside>
            <main>
                {props.children}
            </main>
        </div>
    );
};

export default MainLayout;
