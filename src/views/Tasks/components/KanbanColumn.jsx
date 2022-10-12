import React from "react"
import KanbanCard from "./KanbanCard";
import { Draggable, Droppable } from "react-beautiful-dnd";


function KanbanInnerCardList(props) {
    return props.tasks.map((task, index) => (
        <Draggable key={task.code} draggableId={task.code} index={index}>
            {(dragProvided, dragSnapshot) => (
                <KanbanCard
                    key={task.code + "_card"}
                    provided={dragProvided}
                    task={task}
                />
            )}
        </Draggable>
    ));
};

function KanbanColumn(props) {
    return (
        <div className="kanban-column">
            <div className={`kanban-column-header`}>
                <img className="kanban-status" src={`/assets/icons/status-${props.status}.svg`} />
                <h2 className="kanban-title">{props.title}</h2>
                <span className="kanban-column-count">{props.tasks.length}</span>
            </div>
            <Droppable droppableId={props.title} type="TASK">
                {(dropProvided, dropSnapshot) => (
                    <ul className="kanban-card-list" ref={dropProvided.innerRef} {...dropProvided.droppableProps}>
                        <KanbanInnerCardList tasks={props.tasks} />
                        {dropProvided.placeholder}
                    </ul>
                )}
            </Droppable>
        </div>

    )
}
export default KanbanColumn