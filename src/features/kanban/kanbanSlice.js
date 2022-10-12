import { createSlice } from '@reduxjs/toolkit'

function reorder(list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export const kanbanSlice = createSlice({
    name: 'kanban',
    initialState: {
        columnList: []
    },
    reducers: {
        setColumnList: (state, action) => {
            state.columnList = action.payload;
        },
        reorderColumnList: (state, action) => {
            const { list, source, destination } = { ...action.payload };

            const current = state.columnList.find(l => l.title == source.droppableId);
            const next = state.columnList.find(l => l.title == destination.droppableId);
            const target = current.tasks[source.index];

            // -- moving to same list -- //
            if (source.droppableId === destination.droppableId) {
                const reordered = reorder(current.tasks, source.index, destination.index);

                state.columnList.find(l => l.title == source.droppableId).tasks = reordered;
                return;
            }

            // -- moving to different list -- //
            // remove from original
            current.tasks.splice(source.index, 1);
            // insert into next
            next.tasks.splice(destination.index, 0, target);

            // state.columnList.find(l => l.title == source.droppableId).tasks = current.tasks;
            // state.columnList.find(l => l.title == destination.droppableId).tasks = next.tasks;
        },
        createTask: (state, action) => {
            const { board, title, code, priority, score, icon } = action.payload;
            const selectedBoard = state.columnList.find(b => b.title == board);
            selectedBoard.tasks.push({
                title: title,
                code: code,
                priority: priority,
                score: score,
                icon: icon
            });
        }
    },
})

export const { setColumnList, reorderColumnList, createTask } = kanbanSlice.actions

export default kanbanSlice.reducer