import React from "react"

function UserInfo(props) {
    return (
        <div className="menu-userinfo">
            <i></i>
            <span className="menu-userinfo__title">{props.title}</span>
        </div>
    )
}

export default UserInfo