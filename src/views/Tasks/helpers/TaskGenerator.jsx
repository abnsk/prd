export function generateRandomTask() {
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let code = "";
    for (let i = 0; i < 3; i++) {
        code += str[Math.floor(Math.random() * 21)]
    }
    code += "-";
    code += (Math.floor(Math.random() * 20) + 10).toString();
    const task = {
        priority: Math.ceil(Math.random() * 3),
        score: (Math.random() * 30).toFixed(0),
        icon: Math.random() > .5 ? "epic" : "sprint",
        code: code,
        title: "RANDOM TASK"
    }

    return task;
}