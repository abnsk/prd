import React from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import TasksView from "./views/Tasks/TasksView"

function App() {
    return (
        <>
            <Header />
            <hr />
            <Sidebar />
            <div id="page">
                <TasksView />
            </div>
        </>
    )
}

export default App