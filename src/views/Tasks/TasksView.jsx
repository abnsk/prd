import React, { useEffect } from "react"
import KanbanColumn from "./components/KanbanColumn"
import { DragDropContext } from 'react-beautiful-dnd';
import { generateRandomTask } from "./helpers/TaskGenerator";
import { useSelector, useDispatch } from 'react-redux'
import { setColumnList, reorderColumnList } from "../../features/kanban/kanbanSlice";

function TasksView() {
    const columnList = useSelector((state) => state.kanban.columnList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setColumnList([
            {
                title: "Backlog",
                status: "backlog",
                tasks: [generateRandomTask(), generateRandomTask(), generateRandomTask(), generateRandomTask()],
            },
            {
                title: "To Do",
                status: "todo",
                tasks: [generateRandomTask(), generateRandomTask()],
            },
            {
                title: "In Progress",
                status: "inprogress",
                tasks: [generateRandomTask()],
            },
            {
                title: "Test",
                status: "test",
                tasks: [generateRandomTask(), generateRandomTask(), generateRandomTask()],
            }
        ])) // initalizing with random tasks for demo
    }, [])

    function onDragEnd(result) {
        // dropped nowhere
        if (!result.destination) {
            return;
        }

        const source = result.source;
        const destination = result.destination;

        // did not move anywhere - can bail early
        if (source.droppableId === destination.droppableId && source.index === destination.index) {
            return;
        }

        dispatch(reorderColumnList({ list: columnList, source, destination }))
    }

    function board() {
        return (
            <div className="kanban-view">
                {columnList.map((column, index) => {
                    return (
                        <KanbanColumn
                            key={"col_" + column.title}
                            index={index}
                            title={column.title}
                            status={column.status}
                            tasks={column.tasks}
                        />
                    )
                })}
            </div>
        )
    }

    return (
        <>
            <div className="tasks-header">
                <div className="__left">

                    <div className="--section">
                        <img src="/assets/icons/back.svg" />
                    </div>

                    <div className="--section">
                        <img src="/assets/icons/sprint-icon.svg" />
                        <p>SPR-06</p>
                    </div>

                    <div className="--section">
                        <img src="/assets/icons/team-icon.svg" />
                        <p>TEAM-10</p>
                    </div>

                    <div className="--section sprint-details">
                        <p>New Sprint Name</p>
                        <img src="/assets/icons/calendar.svg" className="sprint-calendar" />
                        <img src="/assets/icons/people.svg" className="sprint-people" />
                        <button className="producter-button btn-fill">Complete Sprint</button>
                    </div>
                </div>
                <div className="__right">
                    <button className="producter-button btn-small"><img src="/assets/icons/list.svg" /></button>
                    <button className="producter-button btn-small blue"><img src="/assets/icons/dashboard.svg" /></button>
                </div>
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
                {board()}
            </DragDropContext>
        </>
    )
}

export default TasksView