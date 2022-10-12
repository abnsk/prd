import React, { useState } from "react"
import TaskCreator from "./TaskCreator";

function Header() {
    const [showTaskCreator, setTaskCreator] = useState(false);

    function showModal() {
        setTaskCreator(true);
    }

    function hideModal() {
        setTaskCreator(false);
    }

    return (
        <header className="header">
            <img src="/assets/images/producter-logo.png" className="producter-logo" width="185" />
            <div className="header-actions display-flex flex-grow">
                <input className="header-search-input" name="search" placeholder="Search" />
                <button className="producter-button btn-icon"><img src="/assets/icons/settings.svg" /></button>
                <button className="producter-button btn-icon"><img src="/assets/icons/filter.svg" /></button>
            </div>
            <button className="producter-button btn-icon outline" onClick={showModal}><img src="/assets/icons/plus.svg" /></button>
            <TaskCreator isOpen={showTaskCreator} onClose={hideModal} />
        </header>
    )
}

export default Header