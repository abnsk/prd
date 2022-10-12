import React from "react"

function KanbanCard({ task, provided }) {

    return (
        <div className="kanban-card" ref={provided.innerRef}  {...provided.draggableProps} {...provided.dragHandleProps}>
            <p>{task.title}</p>
            <div className="kanban-card__details">
                <div className="kanban-card__sprint">
                    <img src={`/assets/icons/${task.icon}.svg`} />
                    {task.code}
                </div>
                <div className="kanban-card__right">
                    <img className="kanban-card__priority" src={`/assets/icons/priority-${task.priority}.svg`} />
                    <span className="kanban-card__score">{task.score}</span>
                    <span className="kanban-card__user"></span>
                </div>
            </div>
        </div>
    )
}

export default KanbanCard