import React from "react"

function MenuItem(props) {
    return (
        <li className={`menu-item ${props.selected ? "selected" : ""}`}>
            <img src={`/assets/icons/${props.icon}.svg`} />
            <span className="menu-item__title">{props.title}</span>
        </li>
    )
}

export default MenuItem