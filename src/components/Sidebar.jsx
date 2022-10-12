import React from "react"
import MenuItem from "./Sidebar/MenuItem"
import CompanyInfo from "./Sidebar/CompanyInfo"
import UserInfo from "./Sidebar/UserInfo"

function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="navigation-menu flex-grow">
                <MenuItem title="Dashboard" icon="home" />
                <MenuItem title="Feedback" icon="chat" />
                <MenuItem title="Task" icon="tasks" selected />
                <MenuItem title="Roadmap" icon="explore" />
                <MenuItem title="Changelog" icon="repeat" />
            </ul>

            <ul className="navigation-menu">
                <MenuItem title="Invite people" icon="plus" />
                <MenuItem title="Help & Community" icon="chat-alt" />
                <MenuItem title="Notifications" icon="bell" />
            </ul>

            <UserInfo title="Neil Larkins" />
            <CompanyInfo title="Epodpay Inc." />
        </div>
    )
}

export default Sidebar