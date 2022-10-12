// these functions use localstorage to store/retrive column data
// since this is a demo app without any backend calls, it attempts to emulate
// http calls.

const COLUMNS_KEY = "kanban_columns";

export function saveColumnList(columns) {
    localStorage.setItem(COLUMNS_KEY, JSON.stringify(columns));
}

export function getColumnList() {
    const columns = localStorage.getItem(COLUMNS_KEY);
    if (columns)
        return JSON.parse(columns);
    else
        saveColumnList(JSON.stringify([]));
}