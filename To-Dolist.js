const addTask =() => {
    const task = document.getElementById("task").value;
    if (task ==="") {
        alert("please enter a task!");
        return false;
    }
    const list = document.getElementById("list");
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(task));
    list.appendChild(item);
    document.getElementById("task").value = " ";
}

const clearlist = () =>{
    const list = document.getElementById("list");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}