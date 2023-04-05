let inputElement = document.querySelector(".name-task-input");
let texteraElement = document.querySelector(".des-input");
let btnAdd = document.querySelector(".btn-add");
let taskListContainer = document.querySelector(".task-list-wrapper");

let taskListData = [
    {
        name: "task 1",
        des: "mô tả task 1",
    },
    {
        name: "task 2",
        des: "mô tả task 2",
    },
];

btnAdd.addEventListener("click", (e) => {
    addTask(e);
});

function addTask(e) {
    e.preventDefault();
    let taskNameValue = inputElement.value;
    let taskDesValue = texteraElement.value;
    if (taskNameValue !== "" && taskDesValue !== "") {
        renderTaskList(taskNameValue, taskDesValue);
        inputElement.value = "";
        texteraElement.value = "";
    } else {
        alert("bạn cần điền đầy đủ thông tin cho task list");
    }
}

let index = 2;

function renderTaskList(name, des) {
    let taskListItem = document.createElement("div");
    taskListItem.classList = "task-list-item";
    taskListItem.innerHTML = `<span id="task-id">#${index++}</span>
                    <span id="name-task">${name}</span>
                    <span id="des-task">${des}</span>
                    <button class="btn btn-detele">Delete</button>
                    <button class="btn btn-edit">Edit</button>`;
    taskListContainer.appendChild(taskListItem);

    let btnDetele = document.querySelector(".btn-detele");
        btnDetele.addEventListener("click", e=> {
            taskListContainer.removeChild(taskListItem)
        })
}
